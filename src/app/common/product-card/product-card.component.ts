import { Component, Input, OnInit } from '@angular/core';

import { Product } from './../../model/product';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = new Product();

  get imageUrl(): string {
    return `${environment.cardImageFolder}${this.product.image}${environment.cardImagePostfix}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
