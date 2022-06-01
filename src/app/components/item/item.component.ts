import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(  ) {


   }
getlistofproducts(){
 //return this.http.get ('/assets/product-data.json');
}
  ngOnInit(): void {

     }
  }


