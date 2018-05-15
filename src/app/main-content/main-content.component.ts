import { Component, OnInit, Input } from '@angular/core';
import { Contact }     from '../../models/Contact';
import { ApplicationView } from '../../models/ApplicationView'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  headerText: string = "All contacts Dmitry Petrov";
  @Input() contacts: Contact[] = [];

  currentView: string;

  constructor() { 
    this.currentView = ApplicationView[ApplicationView.ContactList];
  }

  showEditForm() {
    this.currentView = ApplicationView[ApplicationView.ContactForm];
  }
  showList() {
    this.currentView = ApplicationView[ApplicationView.ContactList];
  }
  showFullView() {
    this.currentView = ApplicationView[ApplicationView.ContactFullView];
  }

  selectedContact(contact: Contact){
    console.log(contact);
  }

  ngOnInit() {
  }

}
