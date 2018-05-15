import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact }     from '../../models/Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input('contacts') contacts: Contact[] = [];
  @Output('select') selectContact = new EventEmitter<Contact>();
  
  selectedContact: Contact;
  test = "test";
  constructor() { 
    // this.contacts.push(new Contact("Vasya","Magic"));
    // this.contacts.push(new Contact("Dima","Petrov"));
    // this.contacts.push(new Contact("Yura"," Fedorenko"));
    // this.contacts.push(new Contact("Elon","Musk"));
  }

  selectContactForEdit(contact: Contact){
    debugger
    this.selectContact.emit(contact);
  }

  ngOnInit() {
  }

}
