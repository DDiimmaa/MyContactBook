import { Component, OnInit, Input } from '@angular/core';
import { Contact }    from '../../models/Contact';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contact: Contact;
  constructor(private contactsService: ContactsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const contactId = this.activatedRoute.snapshot.paramMap.get('id');
    this.contact = this.contactsService.getContactById(contactId);
  }

}
