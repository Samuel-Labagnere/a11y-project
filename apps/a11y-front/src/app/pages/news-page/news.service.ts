import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import * as showdown from 'showdown';
import { TranslateService } from "@ngx-translate/core";

interface NewsApiResponse {
  data: NewsResponse[];
}

interface NewsDetailsApiResponse {
  data: NewsResponse;
}

interface NewsResponse {
  id: string;
  attributes: { Title: string, Description: string, Content: string, publishedAt: string}
}

export interface News {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private httpClient = inject(HttpClient);
  private translate = inject(TranslateService);

  getNews(): Observable<News[]> {
    const currentLang = this.translate.currentLang;
    const url = `${environment.blog.url}/blogs?locale=${currentLang}&sort=publishedAt:desc`;
    return this.httpClient
      .get<NewsApiResponse>(url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${environment.blog.token}`
        }
      })
      .pipe(map(response => response.data.map(r => ({
        id: r.id,
        title: r.attributes.Title,
        description: r.attributes.Description,
        content: r.attributes.Content,
        date: r.attributes.publishedAt
      }))), tap(console.log));
  }

  getNewsById(id: string): Observable<News> {
    return this.httpClient
      .get<NewsDetailsApiResponse>(`${environment.blog.url}/blogs/${id}`, {
        headers : {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${environment.blog.token}`
        }
      }).pipe(map(r => {
        const converter = new showdown.Converter();
        return {id: r.data.id, title: r.data.attributes.Title,
          description: r.data.attributes.Description,
          content: converter.makeHtml(r.data.attributes.Content),
          date: r.data.attributes.publishedAt}
      }));

  }
}
