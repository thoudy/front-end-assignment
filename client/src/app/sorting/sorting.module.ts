import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingButtonComponent } from './components/sorting-button/sorting-button.component';

@NgModule({
  declarations: [
    SortingButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortingButtonComponent
  ]
})
export class SortingModule { }
