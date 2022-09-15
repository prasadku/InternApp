import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInDataBaseComponent } from './search-in-data-base.component';

describe('SearchInDataBaseComponent', () => {
  let component: SearchInDataBaseComponent;
  let fixture: ComponentFixture<SearchInDataBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInDataBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
