// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080'; // Backend URL

  constructor(private http: HttpClient) {}

  // Register a new user
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }

  // Login user
  loginUser(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/users/login`, loginData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  // Get the user's profile (no need for userId in this case, assuming user is logged in)
  getUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/profile`);
  }

  // Update user profile
  updateUserProfile(user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/update`, user); // Ensure endpoint is correct
  }
}
