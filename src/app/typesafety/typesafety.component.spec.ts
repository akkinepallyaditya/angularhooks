import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesafetyComponent } from './typesafety.component';

describe('TypesafetyComponent', () => {
  let component: TypesafetyComponent;
  let fixture: ComponentFixture<TypesafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
