import {Component} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

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

    constructor(
        private router: Router
    ) {
    }

    Entrar() {
        this.router.navigate(['home'])
    }

    voltar() {
        this.router.navigate([''])
    }
}
