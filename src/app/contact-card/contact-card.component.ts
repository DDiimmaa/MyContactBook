import { Component, OnInit, Input } from '@angular/core';
import { Contact }     from '../../models/Contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
