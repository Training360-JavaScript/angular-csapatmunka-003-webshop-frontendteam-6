import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from './../../model/product';
import { ConfigService } from './../../service/config.service';

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
    return price / (this.configService.specialOfferPercent / 100);
  }


  get imageUrl(): string {
    return this.configService.getImageUrl(this.product.image);
  }

  get fullImageUrl(): string {
    return this.configService.getFullImageUrl(this.product.image);
  }

  constructor(
    private el: ElementRef,
    private configService: ConfigService,
    ) { }

  setupFullImageUrl(): void {
    const imgElement = this.el.nativeElement.querySelector('.modal-container img');
    let tout = window.setTimeout(() => {
      this.enableFullImageUrl = true;
      window.clearTimeout(tout);
      imgElement.onload = () => this.onImageLoad();
    }, 0);
  }
  
  endModal(): void {
    this.modalImage = false;
    if (this.modalAutoHideTimerHandle) window.clearTimeout(this.modalAutoHideTimerHandle);
  }

  startModal(): void {
    this.modalImage = true;
    if (!this.enableFullImageUrl) this.setupFullImageUrl();
    if (this.modalAutoHideTimerHandle) window.clearTimeout(this.modalAutoHideTimerHandle);
    this.modalAutoHideTimerHandle = window.setTimeout(this.endModal.bind(this), this.configService.fullImageTimeout);
  }

  onImageClick(): void {
    this.startModal();
  }

  onModalClick(): void {
    this.endModal();
  }
  
  onImageLoad(): void {
    if (!this.hiresLoaded) {
      window.requestAnimationFrame(this.onImageLoad.bind(this));
      this.hiresLoadCounter--;
    }
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
  
  ngOnInit(): void {
  }

}
