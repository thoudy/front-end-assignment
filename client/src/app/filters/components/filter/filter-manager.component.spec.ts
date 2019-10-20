import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterManagerComponent } from './filter-manager.component';
import { FiltersListComponent } from './filters-list/filters-list.component';
import { FilterDetailsComponent } from './filters-list/filter-details/filter-details.component';

describe('FilterManagerComponent', () => {
  let component: FilterManagerComponent;
  let fixture: ComponentFixture<FilterManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterManagerComponent,
        FiltersListComponent,
        FilterDetailsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
