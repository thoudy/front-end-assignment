import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/articles/services/articles.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AppMainComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
  }

}
