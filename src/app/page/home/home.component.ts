import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data$: Observable<Product[]> = this.ps.getAll();

  products: Product[] = [];

  constructor(private ps: ProductService) {
    this.ps.getAll().subscribe(data => this.products = data);
  }
  ngOnInit(): void {
  }

}
