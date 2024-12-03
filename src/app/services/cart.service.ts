import { Injectable } from '@angular/core';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Dish[] = [];  // Cart will store added dishes

  constructor() {}

  // Get the current cart items
  getCart(): Dish[] {
    return this.cart;
  }

  // Add a dish to the cart
  addToCart(dish: Dish): void {
    this.cart.push(dish);
  }

  // Remove a dish from the cart
  removeFromCart(dishId: string): void {
    this.cart = this.cart.filter(dish => dish.id !== dishId);
  }

  // Clear the entire cart
  clearCart(): void {
    this.cart = [];
  }
}
