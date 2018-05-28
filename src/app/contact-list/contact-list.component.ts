import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Contact }     from '../../models/Contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = this.contactService.filteredContacts;
  
  selectedContact: Contact;
  
  constructor(private contactService: ContactsService) { 
    //debugger
    //this.contacts = contactService.filteredContacts;
  }

  ngOnInit() {
  }

}
