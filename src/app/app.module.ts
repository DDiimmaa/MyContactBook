import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './app.contact-list-component';
import { EditContactComponent } from './app.edit-contact-component';
import { ContactViewComponent } from './app.contact-view-component';
import { MenuComponent } from './app.menu-component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    EditContactComponent,
    ContactViewComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,ContactListComponent,EditContactComponent,ContactViewComponent,
    MenuComponent]
})
export class AppModule { }
