import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../models/article.model';
import { FiltersService } from 'src/app/filters/services/filters.service';
import { FilterType } from 'src/app/filters/models/filter-type.model';
import { SortingService } from 'src/app/sorting/services/sorting.service';
import { SortCriteria } from 'src/app/sorting/models/sort-criteria.model';
import { SORTING_CRITERIAS } from 'src/app/utils/sorting-criteria.config';

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
              private filtersService: FiltersService,
              private sortingService: SortingService) { 
    this.subscribeToArticleServiceData();
    this.subscribeToFiltersDataStream();
    this.subscribeToSortingCriteriaStream();
  }
  
  private subscribeToSortingCriteriaStream() {
    this.sortingService.getSortingStream().subscribe(sortingCriteria => {
      this.applySortingCriteria(sortingCriteria); 
    })
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

  private applySortingCriteria(sortingCriteria: SortCriteria) {
    switch (sortingCriteria.criteria) { 
      case SORTING_CRITERIAS.NEW_TO_OLD.value:
        this.sortByNewest();
        break;
      case SORTING_CRITERIAS.OLD_TO_NEW.value:
        this.sortByOldest();
        break;
    }
  }
  
  private sortByNewest() {
    this.activeArticleList.sort((a, b) => {
      return <any>new Date(a.date.transformed) - <any>new Date(b.date.transformed);
    });
  }
  
  private sortByOldest() {
    this.activeArticleList.sort((a, b) => {
      return <any>new Date(b.date.transformed) - <any>new Date(a.date.transformed);
    });
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
