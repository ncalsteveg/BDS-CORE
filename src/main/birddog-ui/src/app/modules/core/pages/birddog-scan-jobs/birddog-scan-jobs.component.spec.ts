import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BirddogScanJobsComponent} from './birddog-scan-jobs.component';

describe('BirddogScanJobsComponent', () => {
  let component: BirddogScanJobsComponent;
  let fixture: ComponentFixture<BirddogScanJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirddogScanJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirddogScanJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
