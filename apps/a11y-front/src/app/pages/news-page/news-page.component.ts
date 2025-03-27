import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { NewsService } from "./news.service";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'a11y-news-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, HeaderComponent, FooterComponent],
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent {
  private readonly newsService = inject(NewsService);
  private readonly translateService = inject(TranslateService);
  

  allNews$ = this.translateService.onLangChange.pipe(
    startWith({ lang: this.translateService.currentLang }),
    switchMap(event => this.newsService.getNews(event.lang))
  );
}
