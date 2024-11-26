import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];  // Define cartItems as an array

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Retrieve items from the CartService
    this.cartItems = this.cartService.getCart();

    // Debugging: Log the cart items to confirm they are being retrieved
    console.log('Cart items:', this.cartItems);
  }
}
