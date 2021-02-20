import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageManagerService {

  constructor(private http: HttpClient) { }

  getHTML(filepath: string): Observable<any> {
    return this.http.get(filepath, { responseType: 'text' });
  }
}
