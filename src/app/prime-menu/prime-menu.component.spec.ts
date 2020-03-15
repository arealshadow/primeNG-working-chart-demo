import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeMenuComponent } from './prime-menu.component';

describe('PrimeMenuComponent', () => {
  let component: PrimeMenuComponent;
  let fixture: ComponentFixture<PrimeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
