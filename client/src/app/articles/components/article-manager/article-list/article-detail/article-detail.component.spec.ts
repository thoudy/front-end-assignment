import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailComponent } from './article-detail.component';

describe('ArticleDetailComponent', () => {
  let component: ArticleDetailComponent;
  let fixture: ComponentFixture<ArticleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticleDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.componentInstance;
    component.article = { id: 1, date: {origin: 'x', transformed: 'y'}, category: 'a', title: 'b', image: 'x', preamble: 'd' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render image, if no url provided', async(() => { 
    component.article.image = '';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card-image')).toEqual(null);
  }))

});
