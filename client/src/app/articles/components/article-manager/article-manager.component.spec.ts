import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ArticleManagerComponent } from './article-manager.component';
import { ArticlesService } from '../../services/articles.service';
import { ArticlesServiceStub } from '../../services/articles.service.stub';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-list/article-detail/article-detail.component';
import { Article } from '../../models/article.model';
import { FiltersService } from 'src/app/filters/services/filters.service';

describe('ArticleManagerComponent', () => {
  let component: ArticleManagerComponent;
  let articlesService: ArticlesServiceStub;
  let fixture: ComponentFixture<ArticleManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ArticlesService, useClass: ArticlesServiceStub },
        FiltersService
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

  it('should display proper message when no articles are available', async(() => {
    let fakeData = [];
    articlesService.pushData(fakeData);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.no-articles').getElementsByTagName('h3')[0].textContent).toContain('No articles.');
  }));

  it('should display 3 articles from http request', async(() => {
    let fakeData: Article[] = [
      { id: 1, title: 'a', image: 'b', category: 'c', date: {origin: 'd', transformed: 'd' }, preamble: 'e' },
      { id: 2, title: 'a', image: 'b', category: 'c', date: {origin: 'd', transformed: 'd' }, preamble: 'e' },
      { id: 3, title: 'a', image: 'b', category: 'c', date: {origin: 'd', transformed: 'd' }, preamble: 'e' }
    ];
    
    articlesService.pushData(fakeData);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-article-detail').length).toEqual(3);
  }));

});
