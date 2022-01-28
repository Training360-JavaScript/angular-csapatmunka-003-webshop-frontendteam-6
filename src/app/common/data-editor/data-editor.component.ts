import { ProductService } from './../../service/product.service';
import { Product } from '../../model/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  products: Product[] = [];
  disabled: boolean = true;

  iNames = [
    'fa-sort-numeric-desc',
    'fa-sort-numeric-asc',
    'fa-sort-alpha-desc',
    'fa-sort-alpha-asc',
    'fa-sort-amount-asc',
    'fa-sort-amount-desc',
  ]


  readonly thInfos = [
    { key: 'id', type: 'number', text: '#', i: 0, sorted: false},
    { key: 'catId', type: 'number', text: 'Category ID', i: 0, sorted: false},
    { key: 'name', type: 'text', text: 'Name', i: 2, sorted: false},
    { key: 'description', type: 'text', text: 'Description', i: 2, sorted: false},
    { key: 'image', type: 'text', text: 'Image', i: 2, sorted: false},
    { key: 'price', type: 'number', text: 'Price', i: 0, sorted: false},
    { key: 'stock', type: 'number', text: 'Stock', i: 0, sorted: false},
    { key: 'featured', type: 'checkbox', text: 'Featured', i: 4, sorted: false},
    { key: 'active', type: 'checkbox', text: 'Active', i: 4, sorted: false},
    { key: 'specialOffer', type: 'checkbox', text: 'Special Offer', i: 4, sorted: false},
  ]

  constructor( 
    private productService: ProductService
   ) { }

  readAll(): void {
    this.disabled = true;
    this.productService.getAll().subscribe(data => {
      this.products = data;
      this.sort();
      this.disabled = false});
  }

  onModify(product: Product): void {
    //TODO: patch product...
    this.readAll();
  }

  onDelete(product: Product): void {
    //TODO: Delete product...
    this.readAll();
  }

  onRead(product: Product): void {
    const idx: number = this.products.indexOf(product)
    if (idx >= 0) {
      //TODO: Read product...
      this.products[idx] = product;
      this.sort();
    }
  }


  sort() {
    const info = this.thInfos.find(e => e.sorted);
    if (!info) return;
    const key = info.key as keyof Product;
    const reverse = info.i & 1 ? 1 : -1;
    if (info.i < 2)
      this.products.sort((a, b) => reverse * ((a[key] as number) - (b[key] as number)));
    else if (info.i < 4)
      this.products.sort((a, b) => reverse * ((a[key] as string).localeCompare(b[key] as string)))
    else 
      this.products.sort((a, b) => reverse * ((a[key] === b[key] ? 0 : a[key] ? -1 : 1)));
  }

  thClick(info: {key: string, i: number, sorted: boolean}): void {
    info.sorted ? info.i ^= 1 : info.i |= 1;
    this.thInfos.forEach(e => e.sorted = e === info);
    this.sort();
  }

  ngOnInit(): void {
    this.readAll();
  }

}
