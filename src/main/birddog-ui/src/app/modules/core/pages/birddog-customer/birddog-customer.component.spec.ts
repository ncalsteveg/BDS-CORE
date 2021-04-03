import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BirddogCustomerComponent} from './birddog-customer.component';

describe('BirddogCustomerComponent', () => {
  let component: BirddogCustomerComponent;
  let fixture: ComponentFixture<BirddogCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirddogCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirddogCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
