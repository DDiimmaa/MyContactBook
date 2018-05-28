import { Component, OnInit, Input } from '@angular/core';
import { Contact }     from '../../models/Contact';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  headerText: string = "All contacts Dmitry Petrov";

  currentView: string;

  constructor() { 
  }

  ngOnInit() {
  }

}
