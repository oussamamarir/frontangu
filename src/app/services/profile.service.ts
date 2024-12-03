import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Add HttpClient and HttpHeaders
import { Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:8080'; // API URL for your backend

  constructor(private http: HttpClient) {} // Inject HttpClient in the constructor

  // Method to update user profile
  updateUserProfile(user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/update`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
