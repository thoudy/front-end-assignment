import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/articles/models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

  private isImage() { 
    return this.article.image.length !== 0;
  }

}
