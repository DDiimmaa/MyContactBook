import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact }     from '../../models/Contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  
  selectedContact: Contact;
  
  constructor(private contactService: ContactsService) { 
    //debugger
    this.contacts = contactService.contacts;
    let y = contactService.categories;
  }

  ngOnInit() {
  }

}
