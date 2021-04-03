import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ScanJobsComponent} from './scan-jobs.component';

describe('ScanJobsComponent', () => {
  let component: ScanJobsComponent;
  let fixture: ComponentFixture<ScanJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
