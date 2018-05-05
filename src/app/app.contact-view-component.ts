import { Component } from '@angular/core';

@Component({
    selector:    'app-contact-view',
    templateUrl: './app.contact-view-component.html',
    styleUrls: ['./app.contact-view-component.scss']
})

export class ContactViewComponent {
    contact: Contact;

    constructor() { }
}