import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersService } from './services/filters.service';
import { FilterManagerComponent } from './components/filter/filter-manager.component';
import { FiltersListComponent } from './components/filter/filters-list/filters-list.component';
import { FilterDetailsComponent } from './components/filter/filters-list/filter-details/filter-details.component';

@NgModule({
  declarations: [
    FilterManagerComponent,
    FiltersListComponent,
    FilterDetailsComponent
  ],
  providers: [
    FiltersService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterManagerComponent,
    FiltersListComponent,
    FilterDetailsComponent
  ]
})
export class FiltersModule { }
