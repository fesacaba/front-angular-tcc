import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CadastroPessoaModel} from "../../service/model/cadastro-pessoa.model";
import {DatePipe} from "@angular/common";
import {PessoaService} from "../../service/pessoa.service";

@Component({
    selector: 'app-cadastrar',
    templateUrl: './cadastrar.component.html',
    styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

    myControl = new FormGroup({
        nome: new FormControl(),
        email: new FormControl(),
        phone: new FormControl(),
        password: new FormControl(),
        rePassword: new FormControl()
    });

    constructor(
        private service: PessoaService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }


    voltar() {
        this.router.navigate([''])
    }

    enviar() {
        // @ts-ignore
        const nome = this.myControl.get('nome').value;
        // @ts-ignore
        const email = this.myControl.get('email').value;
        // @ts-ignore
        const phone = this.myControl.get('phone').value;
        // @ts-ignore
        const password = this.myControl.get('password').value;
        // @ts-ignore
        const rePassword = this.myControl.get('rePassword').value;

        const pessoa = new CadastroPessoaModel(nome, email, phone, password);
        console.log(pessoa);
        if (password != rePassword) {
            alert('Senhas diferentes');
        } else {
            this.service.cadastrar(pessoa).subscribe(
                c => this.router.navigate([''])
            );
        }
    }
}
