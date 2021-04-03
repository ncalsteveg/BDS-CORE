import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BirddogScanLiveComponent} from './birddog-scan-live.component';

describe('BirddogScanLiveComponent', () => {
  let component: BirddogScanLiveComponent;
  let fixture: ComponentFixture<BirddogScanLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirddogScanLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirddogScanLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
