import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /* It is public here, to be able to use in the template */
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
