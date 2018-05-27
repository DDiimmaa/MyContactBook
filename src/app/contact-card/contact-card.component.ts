import { Component, OnInit, Input } from '@angular/core';
import { Contact }     from '../../models/Contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact;
  cardMenuVisible: boolean = false;

  constructor(private contactService: ContactsService) { 
    
  }

  ngOnInit() {
  }

  viewContactDetails(){
    debugger
    this.contactService.selectedContact = this.contact;
  }
}
