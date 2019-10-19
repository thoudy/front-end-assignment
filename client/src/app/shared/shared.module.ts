import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFooterComponent } from './components/footer/footer.component';
import { AppMainComponent } from './components/main/main.component';
import { AppHeaderComponent } from './components/header/header.component';
import { ArticlesModule } from '../articles/articles.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    AppMainComponent
  ],
  imports: [
    CommonModule,
    ArticlesModule,
    HttpClientModule,
  ],
  exports: [
    AppHeaderComponent,
    AppMainComponent,
    AppFooterComponent
  ]
})
export class SharedModule { }
