import {Injectable} from '@angular/core';
import {Message} from "../model/Message";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUri: string = 'http://localhost:8080/message';

  constructor(private http: HttpClient) {
  }

  sendMessage(message: Message) {
    return this.http.post(this.baseUri + '/echo', message).toPromise();
  }

  getWelcomeMessage() {
    return this.http.get(this.baseUri).toPromise();
  }
}
