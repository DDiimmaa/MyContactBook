import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {
  categories: Category[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.categories = this.contactsService.categories;
  }

  showCategoryContacts(categoryId: number){
    console.log(categoryId)
    this.contactsService.filterContactsByCategoryId(categoryId);
  }
}
