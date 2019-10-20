import { Injectable } from '@angular/core';
import { FilterType } from '../models/filter-type.model';
import { Article } from 'src/app/articles/models/article.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private articleDataStream: Subject<Article[]> = new Subject<Article[]>();
  private filterDataStream: Subject<FilterType[]> = new Subject<FilterType[]>();
  private filterVisibilityChangeStream: Subject<FilterType> = new Subject<FilterType>();
  private filters: FilterType[];

  constructor() { 
    this.subscribeToArticleDataStream();
    this.subscribefilterVisibilityChangeStream();    
  }

  public getArticleDataStream(): Subject<Article[]> { 
    return this.articleDataStream;
  }

  public getFilterDataStream(): Subject<FilterType[]> { 
    return this.filterDataStream;
  }

  public getFilterVisibilityChangeStream(): Subject<FilterType> { 
    return this.filterVisibilityChangeStream;
  }

  private subscribeToArticleDataStream() { 
    this.articleDataStream.subscribe(data => {
      this.generateFilters(data);
    });
  }

  private subscribefilterVisibilityChangeStream() {
    this.filterVisibilityChangeStream.subscribe(filter => {
      this.filters.find(f => f.value === filter.value).value = filter.value;
      this.filterDataStream.next(this.filters);
    });
  }

  private generateFilters(articles: Article[]) {
    const filtersSet = new Set();
    for (const art of articles) {
      filtersSet.add(art.category);
    }
    this.filters = this.generateFilterType(filtersSet);
    this.filterDataStream.next(this.filters);
  }

  private setCategoryName(category: string): string {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }

  private generateFilterType(filtersSet: Set<any>): FilterType[] { 
    return Array.from(filtersSet).map(filter => { return { value: filter, filterData: { label: this.setCategoryName(filter), visible: true }} as FilterType });
  }
  
}
