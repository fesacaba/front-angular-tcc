import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EventsResponse} from "./model/events.response";

@Injectable({providedIn: 'root'})
export class EventService {

    basePath: string = 'https://app-back-tcc.herokuapp.com';
    // basePath: string = 'http://localhost:8080';


    constructor(private https: HttpClient) {
    }

    findAll(): Observable<EventsResponse[]> {
        return this.https.get<EventsResponse[]>(this.basePath + '/api/v1/event/');
    }
}
