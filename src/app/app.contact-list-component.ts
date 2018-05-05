import { Component } from '@angular/core';

@Component({
    selector:    'app-contact-list',
    templateUrl: './app.contact-list-component.html',
    styleUrls: ['./app.contact-list-component.scss']
})

export class ContactListComponent implements OnInit {
    contacts: Contact[];
    selectedContact: Contact;

    constructor() { }

    ngOnInit() {
        //TODO: some initial action
    }

    selectHero(contact: Contact) { 
        //TODO: go to edit form
    }
}