import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScanDomainsComponent} from './scan-domains.component';

describe('ScanDomainsComponent', () => {
  let component: ScanDomainsComponent;
  let fixture: ComponentFixture<ScanDomainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanDomainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
