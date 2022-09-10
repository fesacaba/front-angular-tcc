import {Component, OnInit} from '@angular/core';
import {EventsResponse} from "../../service/model/events.response";
import {EventService} from "../../service/event.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    now = new Date().toLocaleString();
    displayedColumns: string[] = ['id', 'valor', 'bandeira', 'status', 'dataRegistro'];
    events: EventsResponse[] = [];
    // @ts-ignore
    valorTotal: number;
    // @ts-ignore
    nome: string;

    constructor(
        private service: EventService
    ) {
    }

    ngOnInit(): void {
        this.findEvents();
        this.findName();
    }

    findEvents() {
        this.service.findAll().subscribe(response => {
            this.events = response.sort((n1, n2) => n1.id - n2.id);

            this.events.forEach(c => {
                if (this.valorTotal == null) {
                    this.valorTotal = c.valor
                } else {
                    this.valorTotal = this.valorTotal + c.valor
                }
            });

        })
    }

    private findName() {
        // @ts-ignore
        this.nome = localStorage.getItem('nome');
    }
}
