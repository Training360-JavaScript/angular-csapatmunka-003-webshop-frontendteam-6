import { Product } from 'src/app/model/product';
import { FormService } from './../../service/form.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-new-form',
  templateUrl: './create-new-form.component.html',
  styleUrls: ['./create-new-form.component.scss']
})
export class CreateNewFormComponent implements OnInit {

  imageModalVisible:boolean = false;

  private mvisible: boolean = false;
  @Input() set visible(value: boolean) {
    if (this.mvisible != value)
      this.visibleChange.emit(this.mvisible = value);
  }

  get visible(): boolean {
    return this.mvisible;
  }
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  @Output() addProduct: EventEmitter<Product>  = new EventEmitter<Product>();

  product: Product = new Product();

  constructor(
    public fs: FormService
  ) { }

  getid(key: string | keyof Product): string {
    return `create-new-form-id__${key}`;
  }

  getclass(key: string | keyof Product): string {
    return `create-new-form-input-${key}`;
  }

  show(): void {
    this.visible = true;
  }

  hide(): void {
    this.visible = false;
  }

  onClose(): void {
    this.hide();
  }

  onClear(): void {
    this.product = new Product();
  }

  onAdd(): void {
    const newProd = {...this.product};
    this.hide();
    this.addProduct.emit(newProd);
  }

  onShow(): void {
    this.imageModalVisible = true;
  }

  onClick(event: any): void {
    event.stopPropagation();
  }


  ngOnInit(): void {

  }

}
