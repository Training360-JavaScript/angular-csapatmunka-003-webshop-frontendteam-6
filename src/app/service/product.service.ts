import { Product } from './../model/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list!: Product[];

  constructor() { }
}
