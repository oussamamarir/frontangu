// src/app/services/review.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Ensure the service is provided globally
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080'; // Your API URL

  constructor(private http: HttpClient) {}

  submitReview(reviewText: string): Observable<any> {
    const review = { text: reviewText }; // Assuming the backend expects an object with a 'text' property
    return this.http.post(`${this.apiUrl}/reviews`, review); // Endpoint to submit a review
  }
}
