import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  imageModalProduct: Product = new Product();
  imageModalVisible: boolean = false;  
  
  constructor(
  ) { }



  ngOnInit(): void {
  }

  onImageShow(product: Product):void {
    this.imageModalProduct = product;
    this.imageModalVisible = true;
  }

}
