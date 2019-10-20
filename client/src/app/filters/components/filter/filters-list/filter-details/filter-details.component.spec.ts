import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDetailsComponent } from './filter-details.component';

describe('FilterDetailsComponent', () => {
  let component: FilterDetailsComponent;
  let fixture: ComponentFixture<FilterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDetailsComponent);
    component = fixture.componentInstance;
    component.filter = { value: 'testFilter', filterData: { label: 'TestFilter', visible: true } };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display proper filter name', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.getElementsByClassName('form-check-label')[0].textContent.trim()).toEqual('TestFilter');
  });

  it('should be checked when filter is visible', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.getElementsByClassName('form-check-input')[0].checked).toBeTruthy();
  });

  it('should not be checked when filter is not visible', async (() => {
    component.filter = { value: 'testFilter', filterData: { label: 'TestFilter', visible: false } };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.getElementsByClassName('form-check-input')[0].checked).toBeFalsy();
  }));
  
});
