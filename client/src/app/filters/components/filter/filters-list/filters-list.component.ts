import { Component, OnInit, Input, Output } from '@angular/core';
import { FilterType } from 'src/app/filters/models/filter-type.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent implements OnInit {

  @Input() filters: FilterType[];
  @Output() filterVisibilityChangeRequest = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  private onFilterVisibilityChange($event) { 
    this.filterVisibilityChangeRequest.emit($event);
  }

}
