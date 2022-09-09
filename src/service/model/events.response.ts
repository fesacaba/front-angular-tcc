export class EventsResponse {
    id: number;
    valor: number;
    bandeira: string;
    status: string;
    dataRegistro: string;

    constructor(id: number, valor: number, bandeira: string, status: string, dataRegistro: string) {
        this.id = id;
        this.valor = valor;
        this.bandeira = bandeira;
        this.status = status;
        this.dataRegistro = dataRegistro;
    }
}
