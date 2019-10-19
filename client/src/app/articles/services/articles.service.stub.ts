import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ArticlesServiceStub {
    private dataStream: Subject<any> = new Subject();
    
    getArticles() { 
        return this.dataStream;
    }

    pushData(data) { 
        this.dataStream.next(data);
    }

}