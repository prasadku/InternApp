import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDataBaseComponent } from './add-to-data-base.component';

describe('AddToDataBaseComponent', () => {
  let component: AddToDataBaseComponent;
  let fixture: ComponentFixture<AddToDataBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToDataBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
