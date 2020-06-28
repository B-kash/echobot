import {Component, Input, OnInit} from '@angular/core';
import {Message, UserType} from "../model/Message";
import {MessageHistoryService} from "../services/message-history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() messageHistory: Message[];

  constructor() {
  }

  ngOnInit(): void {
  }
}
