import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from './../../model/product';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = new Product();
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  modalImage: boolean = false;
  enableFullImageUrl: boolean = false;
  private hiresLoadCounter: number = 3;
  private modalAutoHideTimerHandle: number = 0;

  get hiresLoaded(): boolean {
    return !this.hiresLoadCounter;
  }
  
  getOriginalPrice(price: number) {
    return price / (environment.specialOfferPercent / 100);
  }

  get imageUrl(): string {
    return `${environment.cardImageFolder}${this.product.image}${environment.cardImagePostfix}`;
  }

  get fullImageUrl(): string {
    return `${environment.fullImageFolder}${this.product.image}${environment.fullImagePostfix}`;
  }

  constructor(private el: ElementRef) { }

  setupHires() {
    const imgElement = this.el.nativeElement.querySelector('.modal-container img');
    let tout = window.setTimeout(() => {
      this.enableFullImageUrl = true;
      window.clearTimeout(tout);
      imgElement.onload = () => this.onImageLoad();
    }, 0);
  }
  
  setupModalAutoHide() {
    if (this.modalAutoHideTimerHandle) window.clearTimeout(this.modalAutoHideTimerHandle);
    this.modalAutoHideTimerHandle = window.setTimeout(this.onModalClick.bind(this), environment.fullImageTimeout);
  }

  onImageClick(): void {
    this.modalImage = true;
    this.setupModalAutoHide();
    if (!this.enableFullImageUrl) this.setupHires();
  }

  onModalClick(): void {
    this.modalImage = false;
    if (this.modalAutoHideTimerHandle) window.clearTimeout(this.modalAutoHideTimerHandle);
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  
  onImageLoad(): void {
    if (!this.hiresLoaded) {
      window.requestAnimationFrame(this.onImageLoad.bind(this));
      this.hiresLoadCounter--;
    }
  }

  ngOnInit(): void {
  }

}
