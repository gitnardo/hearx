import { Component, OnInit } from '@angular/core';
import { CartService } from './state/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  newItem() {
    this.cartService.newItem();
  }
}
