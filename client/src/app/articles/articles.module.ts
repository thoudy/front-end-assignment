import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesService } from './services/articles.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticleListComponent } from './components/article-manager/article-list/article-list.component';
import { ArticleManagerComponent } from './components/article-manager/article-manager.component';
import { ArticleDetailComponent } from './components/article-manager/article-list/article-detail/article-detail.component';

@NgModule({
  declarations: [
    ArticleManagerComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  providers: [
    ArticlesService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ArticleManagerComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ]
})
export class ArticlesModule { }
