import { Component, OnInit, Input } from '@angular/core';
import { Contact }    from '../../models/Contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input('contact') contact: Contact;
  constructor() { }

  ngOnInit() {
  }

}
