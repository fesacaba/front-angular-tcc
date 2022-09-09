import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthModel} from "./model/auth.model";

@Injectable({providedIn: 'root'})
export class AuthService {

    basePath: string = 'https://app-back-tcc.herokuapp.com';
    // basePath: string = 'http://localhost:8080';

    constructor(
        public http: HttpClient
    ) {
    }

    public auth(authModel: AuthModel) {
        return this.http.post(this.basePath + '/api/v1/auth/token', authModel);
    }
}
