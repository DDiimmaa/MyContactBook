import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    ContactFullViewComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([
    //   { path: "", component: ContactListComponent },
    //   { path: "/edit", component: ContactFormComponent },
    //   { path: "/details", component: ContactFullViewComponent }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
