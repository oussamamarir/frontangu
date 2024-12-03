import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service'; // Use the existing OrderService
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
})
export class OrderTrackingComponent implements OnInit {
  orderId: string | null = null;  // Type `orderId` to allow null initially
  orderStatus: string = ''; // Initialize with an empty string to store the status
  errorMessage: string = ''; // For showing any error message

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('orderId'); // Get the order ID from the URL

    if (this.orderId) {
      // Only make the request if orderId is valid
      this.fetchOrderTrackingDetails(this.orderId);
    } else {
      this.errorMessage = 'Order ID is invalid.';
    }
  }

  fetchOrderTrackingDetails(orderId: string): void {
    this.orderService.getOrderTracking(orderId).subscribe({
      next: (data) => {
        if (data && data.status) {
          this.orderStatus = data.status; // Assuming the response has a 'status' field
        } else {
          this.errorMessage = 'No tracking information available for this order.';
        }
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = `Error fetching order status: ${err.message}`;
      },
    });
  }
}
