import { Injectable } from '@angular/core';
import { Contact }     from '../../models/Contact';
import { Category } from '../../models/Category';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = [];
  categories: Category[] = [];
  selectedContact: Contact = undefined;

  constructor() { 
    this.contacts.push(new Contact(0,"Vasya","Magic"));
    this.contacts.push(new Contact(1,"Dima","Petrov"));
    this.contacts.push(new Contact(2,"Yura"," Fedorenko"));
    this.contacts.push(new Contact(3,"Elon","Musk"));

    this.categories.push(new Category(1,"Family"));
    this.categories.push(new Category(2,"Friends"));
    this.categories.push(new Category(3,"Work"));
  }

  getContactById(id: number){
    return this.contacts.find(cont => cont.id === id);
  }
}
