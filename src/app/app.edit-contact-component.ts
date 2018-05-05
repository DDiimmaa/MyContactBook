import { Component } from '@angular/core';

@Component({
    selector:    'app-edit-contact',
    templateUrl: './app.edit-contact-component.html',
    styleUrls: ['./app.edit-contact-component.scss']
})

export class EditContactComponent implements OnInit {
    contact: Contact;

    constructor() { }

    ngOnInit() {
        //TODO: some initial action
    }

    saveChanges(contact: Contact) { 
        //TODO: save changes action 
    }
}