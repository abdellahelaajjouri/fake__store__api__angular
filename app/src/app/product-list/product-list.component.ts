import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title = 'app';
  products!: any;
  cartItems: Product[] = [];
  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit() {
    this.http.get('https://fakestoreapi.com/products').subscribe(
      (response) => {
        this.products = response;
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
    this.cartItems = this.cartService.cartItems;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
