import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from 'src/app/config';
import { forkJoin, of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
  
export class ArticlesService {

  private sourceUrl = `${CONFIG.srvUrl}${CONFIG.pathsUrl.articles.path}`;
  private endPoints = CONFIG.pathsUrl.articles.endPoints;

  constructor(private http: HttpClient) { 
    this.getArticles();
  }

  getArticles(): Observable<Article[]> {
    const requests = this.createRequests();
    return forkJoin(requests)
      .pipe(
        map(response => {
          return response.map(el => {
            return el.length === 0 ? [] : el.articles;
          }).flat();
        })
      );
  }

  private createRequests(): Array<Observable<any>> {
    const requests = [];

    for (let endpoint of this.endPoints) {
      let rq = this.http.get(`${this.sourceUrl}${endpoint}`)
        .pipe(
          map(res => {
            return res;
          }), catchError(e => of([]))
        );
      
      requests.push(rq);
    }
    return requests;
  }
}
