import { ConfigService } from 'src/app/service/config.service';
import { Product } from 'src/app/model/product';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  imageUrl: string = '';
  fullImageUrl: string = '';
  @Input() set imageFileName(value: string)
  {
    const newImageUrl = this.configService.getImageUrl(value);
    const newFullImageUrl = this.configService.getFullImageUrl(value);
    if (newImageUrl != this.imageUrl || newFullImageUrl != this.fullImageUrl) {
      if (this.modalAutoHideTimerHandle) window.clearTimeout(this.modalAutoHideTimerHandle);
      this.modalAutoHideTimerHandle = 0;
      this.hiresLoadCounter = 3;
      this.enableFullImageUrl = false;
      this.imageUrl = newImageUrl
      this.fullImageUrl = newFullImageUrl;
    }
  }
  @Input() productName: string = '';

  private mvisible: boolean = false;
  @Input() set visible(value: boolean) {
    if (this.mvisible != value) {
      this.visibleChange.emit(this.mvisible = value);
      if (value)
        this.startModal();
      else
        this.endModal();
    }
  }

  get visible(): boolean {
    return this.mvisible;
  }
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  
  enableFullImageUrl: boolean = false;
  private hiresLoadCounter: number = 3;
  private modalAutoHideTimerHandle: number = 0;

  get hiresLoaded(): boolean {
    return !this.hiresLoadCounter;
  }

  constructor(
    private configService: ConfigService,
    private el: ElementRef,
  ) { }

  ngOnInit(): void {
  }

  setupFullImageUrl(): void {
    const imgElement = this.el.nativeElement.querySelector('.image-modal-container img');
    let tout = window.setTimeout(() => {
      this.enableFullImageUrl = true;
      window.clearTimeout(tout);
      imgElement.onload = () => this.onImageLoad();
    }, 0);
  }
  
  endModal(): void {
    if (this.modalAutoHideTimerHandle) window.clearTimeout(this.modalAutoHideTimerHandle);
  }

  startModal(): void {
    if (!this.enableFullImageUrl) this.setupFullImageUrl();
    if (this.modalAutoHideTimerHandle) window.clearTimeout(this.modalAutoHideTimerHandle);
    this.modalAutoHideTimerHandle = window.setTimeout(this.endModal.bind(this), this.configService.fullImageTimeout);
  }

  onClick(): void {
    this.visible = false;
  }
  
  onImageLoad(): void {
    if (!this.hiresLoaded) {
      window.requestAnimationFrame(this.onImageLoad.bind(this));
      this.hiresLoadCounter--;
    }
  }

}
