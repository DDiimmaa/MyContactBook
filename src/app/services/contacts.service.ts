import { Injectable } from '@angular/core';
import { Contact }     from '../../models/Contact';
import { Category } from '../../models/Category';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  allContacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  categories: Category[] = [];
  selectedContact: Contact = undefined;

  constructor() { 
    this.allContacts.push(new Contact("Kobe","Bryant",2));
    this.allContacts.push(new Contact("Dima","Petrov",1));
    this.allContacts.push(new Contact("Yura"," Fedorenko"));
    this.allContacts.push(new Contact("Elon","Musk"));
    this.allContacts.push(new Contact("Eugene","Vavilov",3));
    this.allContacts.push(new Contact("Jurgen","Klopp",2));
    this.allContacts.push(new Contact("Venus","Williams"));
    this.allContacts.push(new Contact("Viktoria","Petrova",1));
    this.allContacts.push(new Contact("Igor","Velogonschik",3));

    this.categories.push(new Category(0,"All Contacts"));
    this.categories.push(new Category(1,"Family"));
    this.categories.push(new Category(2,"Friends"));
    this.categories.push(new Category(3,"Work"));

    this.filterContactsByCategoryId(0);
  }

  getContactById(id: string){
    return this.allContacts.find(cont => cont.id === id);
  }

  filterContactsByCategoryId(id: number){
    debugger
    this.filteredContacts = this.allContacts
                              .filter(cont => id === undefined || id === 0 || cont.category === id);
  }
}
