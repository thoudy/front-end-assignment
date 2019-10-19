import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-manager',
  templateUrl: './article-manager.component.html',
  styleUrls: ['./article-manager.component.scss']
})
export class ArticleManagerComponent implements OnInit {

  protected articleList: Article[] = [];
  private noArticlesMessage: string = 'No articles.';

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.subscribeToArticleServiceData();
  }

  public getArticleList(): Article[] { 
    return this.articleList;
  }

  private subscribeToArticleServiceData() {
    this.articlesService.getArticles().subscribe(articles => {
      this.articleList = articles;
    });
  }

}
