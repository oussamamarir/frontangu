import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Dish } from '../models/dish.model'; // Ensure this path is correct

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dishes: Dish[] = [
    { id: 'macncheese', name: 'Mac and Cheese', image: 'assets/mach.jpg', price: 12, rating: 4.5 },
    { id: 'burger', name: 'Classic Burger', image: 'assets/burg.jpg', price: 8, rating: 4.2 },
    { id: 'spag', name: 'Spaghetti Carbonara', image: 'assets/spag.jpg', price: 15, rating: 4.7 },
    { id: 'sushi', name: 'Sushi Rolls', image: 'assets/sushi.jpg', price: 20, rating: 4.8 },
    { id: 'pizza', name: 'Margherita Pizza', image: 'assets/pizza.jpg', price: 10, rating: 4.6 },
    { id: 'ramen', name: 'Ramen Noodles', image: 'assets/ramen.jpg', price: 18, rating: 4.4 },
    { id: 'tacos', name: 'Soft Tacos', image: 'assets/soft.jpg', price: 7, rating: 4.1 },
    { id: 'steak', name: 'Grilled Steak', image: 'assets/steak.jpg', price: 25, rating: 5.0 },
    { id: 'couscous', name: 'Couscous', image: 'assets/couscous.webp', price: 40, rating: 4.8 },
    { id: 'tagine', name: 'Chicken Tagine', image: 'assets/tajine.jpg', price: 50, rating: 4.7 },
    { id: 'pastilla', name: 'Pastilla', image: 'assets/pastille.jpg', price: 45, rating: 4.6 },
    { id: 'harira', name: 'Harira Soup', image: 'assets/harira.jpg', price: 25, rating: 4.5 },
    { id: 'briouat', name: 'Briouat', image: 'assets/briouat.jpg', price: 30, rating: 4.4 },
    { id: 'rfissa', name: 'Rfissa', image: 'assets/rfissa.jpg', price: 55, rating: 4.9 },
    { id: 'seffa', name: 'Seffa', image: 'assets/seffa.jpg', price: 40, rating: 4.3 },
    { id: 'zaalouk', name: 'Zaalouk ', image: 'assets/zaalouk.jpg', price: 15, rating: 4.2 },
  ];

  filteredDishes: Dish[] = [...this.dishes];  
  searchQuery: string = ''; 
  showNoResultsVideo: boolean = false; // Add this property to handle video visibility

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  // Method to filter dishes based on search query
  searchDishes() {
    this.filteredDishes = this.dishes.filter(dish =>
      dish.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.showNoResultsVideo = this.filteredDishes.length === 0; // Update the video visibility
  }

  // Method to add a dish to the cart
  addToCart(dish: Dish) {
    this.cartService.addToCart(dish);
    alert(`${dish.name} added to cart!`);
  }
}
