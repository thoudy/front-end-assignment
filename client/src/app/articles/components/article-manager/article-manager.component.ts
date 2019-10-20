import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../models/article.model';
import { FiltersService } from 'src/app/filters/services/filters.service';
import { Subject } from 'rxjs';
import { FilterType } from 'src/app/filters/models/filter-type.model';

@Component({
  selector: 'app-article-manager',
  templateUrl: './article-manager.component.html',
  styleUrls: ['./article-manager.component.scss']
})
export class ArticleManagerComponent implements OnInit {
 
  protected articleList: Article[] = [];
  private activeArticleList: Article[] = [];
  private noArticlesMessage: string = 'No articles.';

  constructor(private articlesService: ArticlesService,
              private filtersService: FiltersService) { 
    this.subscribeToArticleServiceData();
    this.subscribeToFiltersDataStream();
  }
              
  private subscribeToArticleServiceData() {
    this.articlesService.getArticles().subscribe(articles => {      
      this.articleList = articles;
      this.filtersService.getArticleDataStream().next(articles);
    });
  }

  private subscribeToFiltersDataStream() { 
    this.filtersService.getFilterDataStream().subscribe(filters => { 
      this.activeArticleList = this.filterActiveArticles(filters)
    })
  }

  private filterActiveArticles(filters: FilterType[]): Article[] {
    return this.articleList.filter(article => {
      const category = article.category;
      for (const filter of filters) {
        if (filter.value === category && filter.filterData.visible) {
          return article;
        }
      }
    });
  }

  ngOnInit() {
  }

}
