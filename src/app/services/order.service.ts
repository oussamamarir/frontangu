import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:8080'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Get the order history for a user
  getOrderHistory(userId: number): Observable<any> {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.get(`${this.apiUrl}/orders/history`, { params });
  }

  // Place a new order
  placeOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders/place`, order);
  }

  // Get real-time tracking for an order
  getOrderTracking(orderId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/orders/track/${orderId}`);
  }

  // Update the status of an order
  updateOrderStatus(orderId: string, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/orders/update-status/${orderId}`, { status });
  }
}
