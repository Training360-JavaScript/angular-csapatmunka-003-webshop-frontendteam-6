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
  sortPropName: string = '';

  constructor( 
    private productService: ProductService
   ) { }

  read(): void {
    this.productService.getAll().subscribe(data => (this.products = data, this.disabled = false));
  }

  onModify(): void {

  }

  onDelete(): void {

  }


  thClick(propName: keyof Product): void {
    this.products.sort((a, b) => a && b ? (typeof a[propName] === 'number' && typeof b[propName] === 'number' ? 
      a[propName] as number - b[propName] as number : 
      a[propName].toString().localeCompare(b[propName].toString())) : 0);
    if (propName == this.sortPropName) {
      this.sortPropName = '';
      this.products.reverse();
    } else this.sortPropName = propName;
  }

  ngOnInit(): void {
    this.read();
  }

}
