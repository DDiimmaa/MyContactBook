import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFullViewComponent } from './contact-full-view.component';

describe('ContactFullViewComponent', () => {
  let component: ContactFullViewComponent;
  let fixture: ComponentFixture<ContactFullViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFullViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
