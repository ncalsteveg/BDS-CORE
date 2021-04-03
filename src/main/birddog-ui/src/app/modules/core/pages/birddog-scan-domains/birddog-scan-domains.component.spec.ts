import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BirddogScanDomainsComponent} from './birddog-scan-domains.component';

describe('BirddogScanDomainsComponent', () => {
  let component: BirddogScanDomainsComponent;
  let fixture: ComponentFixture<BirddogScanDomainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirddogScanDomainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirddogScanDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
