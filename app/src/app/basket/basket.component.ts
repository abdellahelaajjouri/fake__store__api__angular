import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent {
  cartItems: any[];
  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }
  // updateTotal(item : Product) {
  //   item.total = item.price * item.quantity;
  // }

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item);
  }
}
