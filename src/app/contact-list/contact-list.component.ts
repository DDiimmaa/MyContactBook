import { Component, OnInit } from '@angular/core';
import { Contact }     from '../../models/Contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  
  constructor(private contactsService: ContactsService) { 
  }

  ngOnInit() {
    this.getContactsByCategory(this.contactsService.selectedCategory);

    this.contactsService.categoryChanged.subscribe(cat => {
      this.getContactsByCategory(cat)
    });
  }

  getContactsByCategory(catId: number){

      this.contacts = this.contactsService.allContacts
        .filter(cont => catId === undefined || catId === 0 || cont.category === catId);
        console.log(this.contacts);
  }

}
