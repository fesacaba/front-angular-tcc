export class CadastroPessoaModel {

    public nome: string;
    public email: string;
    public phone: string;
    public password: string;

    constructor(nome: string, email: string, phone: string, password: string) {
        this.nome = nome;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }
}
