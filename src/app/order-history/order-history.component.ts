import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service'; // Use the existing OrderService
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
})
export class OrderHistoryComponent implements OnInit {
  orders: any[] = [];  // Define the orders array to hold the order data
  isLoading = true;  // Define loading state to show the loading message
  errorMessage: string = '';  // Handle error message

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    // Ideally, replace this with a dynamic user ID (get from auth service or state management)
    const userId = 1; // Replace with dynamic user ID, possibly from a UserService

    // Fetch order history for the user
    this.orderService.getOrderHistory(userId).subscribe({
      next: (data) => {
        this.orders = data;  // Populate the orders array with the data from the backend
        this.isLoading = false;  // Set loading to false after data is fetched
      },
      error: (err) => {
        this.errorMessage = 'Error fetching order history: ' + err.message;  // Display error message
        this.isLoading = false;  // Set loading to false in case of error
      }
    });
  }

  // Navigate to the order details page when a user clicks "View Details"
  viewOrderDetails(orderId: string) {
    this.router.navigate(['/order-tracking', orderId]);  // Route to the order tracking page
  }
}
