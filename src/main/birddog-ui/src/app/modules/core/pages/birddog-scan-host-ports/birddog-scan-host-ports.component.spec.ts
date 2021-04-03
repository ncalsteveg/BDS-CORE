import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BirddogScanHostPortsComponent} from './birddog-scan-host-ports.component';

describe('BirddogScanHostPortsComponent', () => {
  let component: BirddogScanHostPortsComponent;
  let fixture: ComponentFixture<BirddogScanHostPortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirddogScanHostPortsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirddogScanHostPortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
