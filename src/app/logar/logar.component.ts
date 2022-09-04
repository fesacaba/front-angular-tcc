import {Component, ElementRef, Renderer2, ViewChild} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthModel} from "../../service/model/auth.model";
import {AuthService} from "../../service/auth.service";

@Component({
    selector: 'app-logar',
    templateUrl: './logar.component.html',
    styleUrls: ['./logar.component.css']
})
export class LogarComponent {
    myControl = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
    });

    @ViewChild('exampleDiv') exampleDiv: ElementRef | undefined;

    constructor(
        private router: Router,
        private auth: AuthService,
        private renderer: Renderer2
    ) {
    }

    login() {

        // @ts-ignore
        const email = this.myControl.get('email').value;
        // @ts-ignore
        const password = this.myControl.get('password').value;
        const auth = new AuthModel(email, password);


        this.auth.auth(auth).subscribe(
            c => {
                console.log(c)
                this.router.navigate(['home']);
                // @ts-ignore
                localStorage.setItem('cpf', c.cpf);
            }
            ,
            err => {
                this.show()
                setTimeout(() => {
                    this.remove();
                }, 2000);
            });

    }

    show() {
        const p: HTMLParagraphElement = this.renderer.createElement('p');
        p.innerHTML = '<p id="alerta" class="alert alert-danger" style="text-align: center">Erro ao Efetuar login<br> usuário ou senha incorretos</p>';
        // @ts-ignore
        this.renderer.appendChild(this.exampleDiv.nativeElement, p)

    }

    remove() {
        const e = this.renderer.selectRootElement('.another-test',false);
    }

    voltar() {
        this.router.navigate([''])
    }
}
