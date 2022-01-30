import { FormInfo } from 'src/app/forminfo/form-info';
import { FormService } from './../../service/form.service';
import { ProductService } from './../../service/product.service';
import { Product } from '../../model/product';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  @Output() showProductImage: EventEmitter<Product> = new EventEmitter<Product>();

  products: Product[] = [];
  disabled: boolean = true;

  startIdx: number = 0;
  get count(): number {
    return Math.floor((window.innerHeight - 300) / 64);
  };
  get first():boolean { return this.startIdx == 0;}
  get last():boolean { return this.endIdx == this.products.length;}
  get endIdx():number {
    return Math.min(this.products.length, this.startIdx + this.count);
  }

  createNewFormIsVisible: boolean = false;

  sortedInfo: FormInfo | null = null;
  revSort: boolean = false;

  iNames = [
    'fa-sort-numeric-desc',
    'fa-sort-numeric-asc',
    'fa-sort-alpha-desc',
    'fa-sort-alpha-asc',
    'fa-sort-amount-asc',
    'fa-sort-amount-desc',
  ]
  
  constructor( 
    private productService: ProductService,
    public fs: FormService,
   ) { }

  readAll(): void {
    this.disabled = true;
    this.productService.getAll().subscribe(data => {
      this.products = data;
      this.sort();
      this.disabled = false});
  }

  onModify(product: Product): void {
    this.disabled = true;
    this.productService.update(product).subscribe(next => this.refreshProduct(product, next));
  }

  onDelete(product: Product): void {
    this.disabled = true;
    this.productService.remove(product.id).subscribe( next => {
      this.readAll();
      this.disabled = false;
    });
  }

  refreshProduct(oldproduct: Product, newproduct: Product) {
    const index: number = this.products.indexOf(oldproduct);
    if (index >= 0)
    {
      this.products[index] = newproduct;
      this.sort();
    }
      this.disabled = false;
  }

  onRead(product: Product): void {
    this.disabled = true;
    this.productService.get(product.id).subscribe( next => this.refreshProduct(product, next));
  }


  sort() {
    if (!this.sortedInfo)
      return;
    const info: FormInfo = this.sortedInfo;
    const key = info.key as keyof Product;
    const reverse = this.revSort ? -1 : 1;
    if (info.i == 0)
      this.products.sort((a, b) => reverse * ((a[key] as number) - (b[key] as number)));
    else if (info.i == 1)
      this.products.sort((a, b) => reverse * ((a[key] as string).localeCompare(b[key] as string)))
    else 
      this.products.sort((a, b) => reverse * ((a[key] === b[key] ? 0 : a[key] ? -1 : 1)));
  }

  thClick(info: FormInfo): void {
    this.revSort = this.sortedInfo == info ? !this.revSort : false;
    this.sortedInfo = info;
    this.sort();
  }

  onPrevious(): void {
    this.startIdx = Math.max(0, this.startIdx - this.count);
  }

  onNext(): void {
    this.startIdx = Math.max(0, Math.min(this.products.length - this.count, this.startIdx + this.count))
  }

  createNew(): void {
    this.createNewFormIsVisible = true;
  }

  addProduct(product: Product): void {
    this.disabled = true;
    this.productService.add(product).subscribe(
      data => {
        console.log(data);
        this.readAll();
      }
    );
  }

  onShowImage(product: Product): void {
    this.showProductImage.emit(product);
  }

  ngOnInit(): void {
    this.readAll();
  }

}
