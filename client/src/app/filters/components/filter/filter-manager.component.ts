import { Component, OnInit, OnDestroy } from '@angular/core';
import { FiltersService } from '../../services/filters.service';
import { FilterType } from '../../models/filter-type.model';

@Component({
  selector: 'app-filter-manager',
  templateUrl: './filter-manager.component.html',
  styleUrls: ['./filter-manager.component.scss']
})
export class FilterManagerComponent implements OnInit, OnDestroy {

  private filters: FilterType[] = [];
  private dataSource: string = "Data Sources";
  
  constructor(private filtersService: FiltersService) {
    this.subscribeToFilterDataStream();
  }
  
  private subscribeToFilterDataStream() {
    this.filtersService.getFilterDataStream().subscribe(filters => {
      this.filters = filters;
    });
  }

  private onFilterVisibilityChangeRequest($event) { 
    this.filtersService.getFilterVisibilityChangeStream().next($event);
  }

  ngOnInit() {
  }

  ngOnDestroy() { 
    this.filtersService.getFilterDataStream().unsubscribe();
  }

}
