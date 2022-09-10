import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthModel} from "./model/auth.model";
import {Observable} from "rxjs";
import {CadastroPessoaModel} from "./model/cadastro-pessoa.model";

@Injectable({providedIn: 'root'})
export class AuthService {

    basePath: string = 'https://app-back-tcc.herokuapp.com';
    // basePath: string = 'http://localhost:8080';

    constructor(
        public http: HttpClient
    ) {
    }

    public auth(authModel: AuthModel): Observable<CadastroPessoaModel> {
        return this.http.post<CadastroPessoaModel>(this.basePath + '/api/v1/auth/token', authModel);
    }
}
