import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainComponent } from './main.component';
import { AppHeaderComponent } from '../header/header.component';
import { AppFooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesModule } from 'src/app/articles/articles.module';
import { FiltersModule } from 'src/app/filters/filters.module';
import { SortingModule } from 'src/app/sorting/sorting.module';

describe('AppMainComponent', () => {
  let component: AppMainComponent;
  let fixture: ComponentFixture<AppMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ArticlesModule,
        FiltersModule,
        SortingModule
      ],
      declarations: [
        AppMainComponent,
        AppHeaderComponent,
        AppFooterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
