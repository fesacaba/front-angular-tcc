import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CadastroPessoaModel} from "./model/cadastro-pessoa.model";

@Injectable({providedIn: 'root'})
export class PessoaService{

    constructor(
        public http: HttpClient
    ) {
    }

    public cadastrar(model: CadastroPessoaModel) {
        return this.http.post(`https://app-back-tcc.herokuapp.com/api/v1/pessoa`, model);
    }
}
