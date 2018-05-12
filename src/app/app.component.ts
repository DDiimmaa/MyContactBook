import { Component } from '@angular/core';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  contacts: Contact[] = [];

  constructor(){
    this.contacts.push(new Contact("Vasya","Magic"));
    this.contacts.push(new Contact("Dima","Petrov"));
    this.contacts.push(new Contact("Yura"," Fedorenko"));
    this.contacts.push(new Contact("Elon","Musk"));
  }
}
