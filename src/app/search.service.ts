import { GoogleResponse } from './response/response.module';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  url: string = 'https://www.googleapis.com/customsearch/v1?';
  api_key: string = 'AIzaSyDnH1Ug-n54_oTGdnuUNqHzbfEZgq52NR4';
  cx_key: string = '017576662512468239146:omuauf_lfve';
  constructor(private httpClient: HttpClient) {}

  getSearchData(word: string): Observable<GoogleResponse> {

    return this.httpClient.get<GoogleResponse>(`${this.url}`, {
      params: {
        key: this.api_key,
        cx: this.cx_key,
        q: word,
      },
    });
  }
}
