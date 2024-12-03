import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';  // Import CartService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // Inject CartService into NavbarComponent
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
}
