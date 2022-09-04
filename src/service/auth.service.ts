import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthModel} from "./model/auth.model";

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(
        public http: HttpClient
    ) {
    }

    public auth(authModel: AuthModel) {
        return this.http.post(`https://app-back-tcc.herokuapp.com/api/v1/auth/token`, authModel);
    }
}
