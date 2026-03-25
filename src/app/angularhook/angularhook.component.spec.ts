import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularhookComponent } from './angularhook.component';

describe('AngularhookComponent', () => {
  let component: AngularhookComponent;
  let fixture: ComponentFixture<AngularhookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularhookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
