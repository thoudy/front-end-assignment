import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterType } from 'src/app/filters/models/filter-type.model';

@Component({
  selector: 'app-filter-details',
  templateUrl: './filter-details.component.html',
  styleUrls: ['./filter-details.component.scss']
})
export class FilterDetailsComponent implements OnInit {

  @Input() filter: FilterType;
  @Output() filterVisibilityChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  private filterVisibilityChange() { 
    this.filter.filterData.visible = !this.filter.filterData.visible;
    this.filterVisibilityChanged.emit(this.filter);
  }

}
