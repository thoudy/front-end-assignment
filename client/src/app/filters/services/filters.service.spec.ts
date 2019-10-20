import { TestBed, tick, fakeAsync } from '@angular/core/testing';

import { FiltersService } from './filters.service';
import { Subject } from 'rxjs';
import { FilterType } from '../models/filter-type.model';
import { Article } from 'src/app/articles/models/article.model';

describe('FiltersService', () => {
  let filtersService: FiltersService;
  
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FiltersService
    ]
  }));

  beforeEach(() => {
    filtersService = TestBed.get(FiltersService);
  });

  it('should be created', () => {
    expect(filtersService).toBeTruthy();
  });

  it('should create filters when articles show up', fakeAsync(() => {
    let articleDataStream: Subject<Article[]> = new Subject<Article[]>();
    let filterDataStream: Subject<FilterType[]> = new Subject<FilterType[]>();

    articleDataStream = filtersService.getArticleDataStream();
    filterDataStream = filtersService.getFilterDataStream();

    let articles = [
      {
        id: 1,
        date: { origin:'x', transformed: 'z' },
        image: 'z',
        category: 'category1',
        title: 'y',
        preamble: 'c'
      },
      {
        id: 2,
        date: { origin:'x', transformed: 'z' },
        image: 'z',
        category: 'category2',
        title: 'y',
        preamble: 'c'
      }
    ];

    filterDataStream.subscribe(data => {
      expect(data.length).toEqual(2);
    });

    articleDataStream.next(articles);

  }));

  it('should properly convert to filter data type', fakeAsync(() => {
    let articleDataStream: Subject<Article[]> = new Subject<Article[]>();
    let filterDataStream: Subject<FilterType[]> = new Subject<FilterType[]>();

    articleDataStream = filtersService.getArticleDataStream();
    filterDataStream = filtersService.getFilterDataStream();

    let articles = [
      {
        id: 1,
        date: { origin:'x', transformed: 'z' },
        image: 'z',
        category: 'category1',
        title: 'y',
        preamble: 'c'
      }
    ];

    filterDataStream.subscribe(data => {
      expect(data.length).toEqual(1);
      expect(data[0].value).toEqual('category1');
      expect(data[0].filterData.label).toEqual('Category1');
      expect(data[0].filterData.visible).toBeTruthy();
    });

    articleDataStream.next(articles);

  }));

  it('should return empty filter data, when no articles show up', fakeAsync(() => {
    let articleDataStream: Subject<Article[]> = new Subject<Article[]>();
    let filterDataStream: Subject<FilterType[]> = new Subject<FilterType[]>();

    articleDataStream = filtersService.getArticleDataStream();
    filterDataStream = filtersService.getFilterDataStream();

    let articles = [];

    filterDataStream.subscribe(data => {
      expect(data.length).toEqual(0);
    });

    articleDataStream.next(articles);
  }));

});
