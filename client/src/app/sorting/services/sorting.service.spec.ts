import { TestBed } from '@angular/core/testing';
import { SortingService } from './sorting.service';

describe('SortingService', () => {
  let sortingService: SortingService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SortingService
    ]
  }));

  beforeEach(() => {
    sortingService = TestBed.get(SortingService);
  });

  it('should be created', () => {
    expect(sortingService).toBeTruthy();
  });

  it('should contain two sorting criterias', () => {
    expect(sortingService.sortCriterias.length).toEqual(2);
  });
  
});
