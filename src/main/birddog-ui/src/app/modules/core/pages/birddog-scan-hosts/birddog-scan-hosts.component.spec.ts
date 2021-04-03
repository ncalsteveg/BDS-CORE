import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BirddogScanHostsComponent} from './birddog-scan-hosts.component';

describe('BirddogScanHostsComponent', () => {
  let component: BirddogScanHostsComponent;
  let fixture: ComponentFixture<BirddogScanHostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirddogScanHostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirddogScanHostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
