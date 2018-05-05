import { Component } from '@angular/core';

@Component({
    selector:    'app-menu',
    templateUrl: './app.menu-component.html',
    styleUrls: ['./app.menu-component.scss']
})

export class MenuComponent  {
    menuItems: MenuItem[]

    constructor() { }
}