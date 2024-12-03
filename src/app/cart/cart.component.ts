import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Dish } from '../models/dish.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Dish[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.calculateTotalPrice();
  }

  // Calculate the total price of the items in the cart
  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  // Remove an item from the cart
  removeFromCart(dishId: string): void {
    this.cartService.removeFromCart(dishId);
    this.cartItems = this.cartService.getCart();  // Update the cart display
    this.calculateTotalPrice();  // Recalculate the total price
  }
}
