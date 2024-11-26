import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menu: any[] = [];

  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(data => {
      this.menu = data;
    });
  }

  addToCart(dish: any) {
    this.cartService.addToCart(dish);
    console.log('Added to cart:', dish);
  }
}
