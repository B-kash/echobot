import {Injectable} from '@angular/core';
import {Message, UserType} from "../model/Message";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class MessageHistoryService {
  history: Message[];

  constructor(private api: ApiService) {
    this.history = [];

  }

  getHistory() {
    return this.history;
  }

  async sendMessage(message: Message) {
    this.history.push(message);
    if (message.sentBy === UserType.User) {
      this.api.sendMessage(message).then((response: Message) => {
        this.history.push(response);
      });
    }

  }

  getWelcomeMessage() {
    this.api.getWelcomeMessage().then((response: Message) => {
      this.history.push(response);
    })
  }
}
