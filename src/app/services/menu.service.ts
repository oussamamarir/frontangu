import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'https://your-api-url.com/menu';

  constructor(private http: HttpClient) {}

  getMenu(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
