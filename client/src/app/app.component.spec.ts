import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppMainComponent } from './shared/components/main/main.component';
import { AppHeaderComponent } from './shared/components/header/header.component';
import { AppFooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesModule } from './articles/articles.module';
import { FiltersModule } from './filters/filters.module';
import { SortingModule } from './sorting/sorting.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ArticlesModule,
        FiltersModule,
        SortingModule
      ],
      declarations: [
        AppComponent,
        AppMainComponent,
        AppHeaderComponent,
        AppFooterComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have correct title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Awesome article app!');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('client app is running!');
  });
});
