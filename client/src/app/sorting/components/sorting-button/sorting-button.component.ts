import { Component, OnInit } from '@angular/core';
import { SortingService } from '../../services/sorting.service';
import { SortCriteria } from '../../models/sort-criteria.model';
import { SORTING_CRITERIAS } from 'src/app/utils/sorting-criteria.config';

@Component({
  selector: 'app-sorting-button',
  templateUrl: './sorting-button.component.html',
  styleUrls: ['./sorting-button.component.scss']
})
export class SortingButtonComponent implements OnInit {

  private sortingCriterias: SortCriteria[];
  private labelTitle: string = 'Sort by date:';
  
  constructor(private sortingService: SortingService) { 
    this.sortingCriterias = this.sortingService.getSortCriterias();
  }
  
  private sortByNewest() { 
    let targetCriteria: SortCriteria = this.sortingCriterias.find(el => el.criteria === SORTING_CRITERIAS.NEW_TO_OLD.value);
    this.sortingService.sortArticles(targetCriteria);
  }
  
  private sortByOldest() { 
    let targetCriteria: SortCriteria = this.sortingCriterias.find(el => el.criteria === SORTING_CRITERIAS.OLD_TO_NEW.value);
    this.sortingService.sortArticles(targetCriteria);
  }

  ngOnInit() {
  }

}
