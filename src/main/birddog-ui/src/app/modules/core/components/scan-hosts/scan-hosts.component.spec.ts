import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScanHostsComponent} from './scan-hosts.component';

describe('ScanHostsComponent', () => {
  let component: ScanHostsComponent;
  let fixture: ComponentFixture<ScanHostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanHostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanHostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
