import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFooterComponent } from './components/footer/footer.component';
import { AppMainComponent } from './components/main/main.component';
import { AppHeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppMainComponent,
    AppFooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppHeaderComponent,
    AppMainComponent,
    AppFooterComponent
  ]
})
export class SharedModule { }
