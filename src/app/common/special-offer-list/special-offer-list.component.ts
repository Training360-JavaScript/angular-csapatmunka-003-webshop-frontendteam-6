import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-special-offer-list',
  templateUrl: './special-offer-list.component.html',
  styleUrls: ['./special-offer-list.component.scss']
})
export class SpecialOfferListComponent implements OnInit {
  @Input() products: Product[] | null = [];
  constructor() { }

  ngOnInit(): void {
  }

}
