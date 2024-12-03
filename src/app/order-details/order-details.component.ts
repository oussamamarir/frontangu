import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  // Define the selectedDish property
  selectedDish = {
    name: 'Pizza Margherita',
    image: 'https://example.com/pizza.jpg', // Replace with actual image URL
    price: 12.99,
    ingredients: 'Tomato, Mozzarella, Basil',
    rating: 4.5,
  };

  constructor() {}

  ngOnInit(): void {}

  // Methods for actions
  addToCart(): void {
    console.log('Dish added to cart:', this.selectedDish.name);
    // Add your logic for adding to cart here
  }

  removeFromCart(): void {
    console.log('Dish removed from cart:', this.selectedDish.name);
    // Add your logic for removing from cart here
  }

  stopOrdering(): void {
    console.log('Ordering stopped for:', this.selectedDish.name);
    // Add your logic for stopping ordering here
  }
}
