import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { BirthdaySelectorComponent } from './birthday-selector/birthday-selector.component';
import { MenuFiltersComponent } from './menu-filters/menu-filters.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactFullViewComponent } from './contact-full-view/contact-full-view.component';
import { ContactsService } from './services/contacts.service';
import { CreateContactComponent } from './create-contact/create-contact.component';

const routes: Routes = [
  { path: "list", component: ContactListComponent },
  { path: "edit/:id", component: ContactFormComponent },
  { path: "create", component: ContactFormComponent },
  { path: "details/:id", component: ContactFullViewComponent },
  { path: "", redirectTo: 'list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    SideBarComponent,
    ContactCardComponent,
    MainContentComponent,
    CategorySelectorComponent,
    SearchContactComponent,
    BirthdaySelectorComponent,
    MenuFiltersComponent,
    ContactFormComponent,
    ContactFullViewComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
