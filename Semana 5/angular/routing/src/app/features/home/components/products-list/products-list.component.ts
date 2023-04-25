import { Product } from './../../models/products/products.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products : Array<Product> = [
    {
      id: 1,
      description : "NBA - Playoffs - Best of 16",
      price : 500
    },
    {
      id: 2,
      description : "The killers - Turne",
      price : 350
    },
    {
      id: 2,
      description : "E3 - 2023 - All days",
      price : 700
    },
  ]
}
