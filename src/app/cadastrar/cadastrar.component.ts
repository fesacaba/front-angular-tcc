import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CadastroPessoaModel} from "../../service/model/cadastro-pessoa.model";
import {DatePipe} from "@angular/common";

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
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    salvar() {


    }

    voltar() {
        this.router.navigate([''])
    }

    enviar() {

    }
}
