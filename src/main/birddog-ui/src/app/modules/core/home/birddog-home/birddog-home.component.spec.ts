import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BirddogHomeComponent} from './birddog-home.component';

describe('BirddogHomeComponent', () => {
  let component: BirddogHomeComponent;
  let fixture: ComponentFixture<BirddogHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirddogHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirddogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
