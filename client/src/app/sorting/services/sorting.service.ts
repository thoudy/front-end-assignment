import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SortCriteria } from '../models/sort-criteria.model';
import { SORTING_CRITERIAS } from 'src/app/utils/sorting-criteria.config';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  private sortingStream: Subject<SortCriteria> = new Subject<SortCriteria>();
  public sortCriterias: SortCriteria[] = [];

  constructor() { 
    this.generateSortingCriterias();
  }

  public getSortingStream(): Subject<SortCriteria> { 
    return this.sortingStream;
  }

  public getSortCriterias(): SortCriteria[] { 
    return this.sortCriterias;
  }

  public sortArticles(sortCriteria: SortCriteria) {
    this.sortingStream.next(sortCriteria);
  }

  private generateSortingCriterias(): void { 
    for (const cr in SORTING_CRITERIAS) {
      this.sortCriterias.push({ criteria: cr })
    }
  }
}
