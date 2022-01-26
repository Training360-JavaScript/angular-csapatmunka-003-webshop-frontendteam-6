import { ProductService } from './service/product.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'str-angular-project001';

  //data$: Observable<Product[]> = this.ps.getAll();

  products: Product[] = [];

  constructor(private ps: ProductService) {
    this.ps.getAll().subscribe(data => this.products = data);
  }

}
