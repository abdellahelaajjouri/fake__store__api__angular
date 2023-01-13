import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
  removeFromCart(product: Product) {
    let index = this.cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
