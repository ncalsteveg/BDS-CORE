import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScanHostPortsComponent} from './scan-host-ports.component';

describe('ScanHostPortsComponent', () => {
  let component: ScanHostPortsComponent;
  let fixture: ComponentFixture<ScanHostPortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanHostPortsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanHostPortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
