import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersListComponent } from './filters-list.component';
import { FilterDetailsComponent } from './filter-details/filter-details.component';

describe('FiltersListComponent', () => {
  let component: FiltersListComponent;
  let fixture: ComponentFixture<FiltersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FiltersListComponent,
        FilterDetailsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersListComponent);
    component = fixture.componentInstance;
    component.filters = [
      { value: 'testFilter1', filterData: { label: 'TestFilter1', visible: true } },
      { value: 'testFilter2', filterData: { label: 'TestFilter2', visible: true } }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two filter buttons named TestFilter1 and TestFilter2', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.children.length).toEqual(2);
  });

  it('should not render filter details if no filters provided', async(() => {
    component.filters = [];
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.children.length).toEqual(0);
  }));

});
