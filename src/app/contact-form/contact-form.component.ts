import { Component, OnInit, Input } from '@angular/core';
import { Contact }    from '../../models/Contact';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contact: Contact;
  categories: Category[];
  router: Router;

  constructor(private contactsService: ContactsService,
              private activatedRoute: ActivatedRoute,
              private _router: Router) { 
      this.router = _router;
      this.categories = contactsService.categories;
      console.log(this.categories);
  }

  ngOnInit() {
    const contactId = this.activatedRoute.snapshot.paramMap.get('id');
    if(contactId){
      this.contact = this.contactsService.getContactById(contactId);
    }
    else{
      this.contact = new Contact("","");
    }
    console.log("contactId: " + contactId);
  }

  saveChanges(){
    if(this.contact.id === undefined || this.contact.id.trim() === ""){
      this.contactsService.addContact(this.contact);
    }
    else{
      this.contactsService.updateContact(this.contact);
    }
    this.router.navigate(['/list']);
  }

  deleteContact(){
    alert("coming soon :)");
  }
}
