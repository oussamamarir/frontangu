import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Ensures the service is available throughout the app
})
export class CartService {
  private cart: any[] = [];  // Cart items array

  addToCart(dish: any) {
    console.log('Adding item to cart:', dish); // Debugging: Log when an item is added
    this.cart.push(dish);
  }

  getCart() {
    console.log('Fetching cart items:', this.cart); // Debugging: Log current cart items
    return this.cart;
  }
}
