import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080'; // Replace with your backend base URL

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
  

  // Get user profile
  getUserProfile(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/profile`, {
      params: { userId: userId.toString() }
    });
  }

  // Simulated Auth Login (if needed)
  simulatedLogin(username: string, password: string): Observable<any> {
    const loginRequest = { username, password };
    return this.http.post(`${this.apiUrl}/api/login`, loginRequest);
  }
}
