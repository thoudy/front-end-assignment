import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleManagerComponent } from './article-manager.component';
import { ArticlesService } from '../../services/articles.service';
import { ArticlesServiceStub } from '../../services/articles.service.stub';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-list/article-detail/article-detail.component';
import { Article } from '../../models/article.model';

describe('ArticleManagerComponent', () => {
  let component: ArticleManagerComponent;
  let articlesService: ArticlesServiceStub;
  let fixture: ComponentFixture<ArticleManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ArticlesService, useClass: ArticlesServiceStub}
      ],
      declarations: [
        ArticleManagerComponent,
        ArticleListComponent,
        ArticleDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleManagerComponent);
    articlesService = TestBed.get(ArticlesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive three categories from service data stream', async(() => {
    let fakeData = [{
      "fashion": [{ id: 1, title: 'a' }]
    },
    {
      "sport": [{ id: 2, title: 'b' }]
    },
    {
      "sport": [{ id: 3, title: 'c' }]
    }];
    
    articlesService.pushData(fakeData);
    expect(fixture.componentInstance.getArticleList().length).toEqual(3);
  }));

  it('should return empty array when http request returns error', async(() => {
    let fakeData = [];    
    articlesService.pushData(fakeData);
    expect(fixture.componentInstance.getArticleList().length).toEqual(0);
  }));

  it('should display proper message when no articles are available', async(() => {
    let fakeData = [];
    articlesService.pushData(fakeData);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.no-articles').getElementsByTagName('h3')[0].textContent).toContain('No articles.');
  }));

  it('should display 3 articles from http request', async(() => {
    let fakeData: Article[] = [
      { id: 1, title: 'a', image: 'b', category: 'c', date: 'd', preamble: 'e' },
      { id: 2, title: 'a', image: 'b', category: 'c', date: 'd', preamble: 'e' },
      { id: 3, title: 'a', image: 'b', category: 'c', date: 'd', preamble: 'e' }
    ];
    
    articlesService.pushData(fakeData);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-article-detail').length).toEqual(3);
  }));

});
