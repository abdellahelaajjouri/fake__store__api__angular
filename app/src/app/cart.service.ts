import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
    console.log(this.cartItems);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
