import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data : any;
  constructor(private prodService : ProductsService ) { }

  ngOnInit(): void {
    this.prodService.getProducts().subscribe(response=>{

      this.data=response.P1;
  });

}
}
