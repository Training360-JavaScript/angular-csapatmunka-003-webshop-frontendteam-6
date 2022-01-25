import { Component, Input, OnInit } from '@angular/core';
import { ProductCardComponent } from 'src/app/common/product-card/product-card.component';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  @Input product!: ProductCardComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
