import { Component, OnInit, Input } from '@angular/core';
import { Contact }     from '../../models/Contact';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-full-view',
  templateUrl: './contact-full-view.component.html',
  styleUrls: ['./contact-full-view.component.scss']
})
export class ContactFullViewComponent implements OnInit {
  contact: Contact;

  constructor(private contactsService: ContactsService,
              private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    // subscribe to router event
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   debugger
    //     let contactId = +params['id'];
        
    //     this.contact = this.contactsService.getContactById(contactId);
    //     //console.log(userId);
    //   });
    const contactId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.contact = this.contactsService.getContactById(contactId);
  }

}
