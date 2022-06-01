import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private listOfProducts = [];
  cartItems = [];

  constructor( private http:HttpClient) { }

  getProducts() :Observable<product>{
    // http call to retrieve list of products
    return this.http.get('/assets/product-DataTransfer.json') as Observable<product>;
    ;
  };

  getOrderData() {
    // http call to retrieve list of orders

  }

  clearCart() {
    this.cartItems = [];
  }
}
