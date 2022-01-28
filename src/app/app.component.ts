import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Product } from './model/product';
import { ItemService } from './service/item.service';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  title = 'str-angular-project001';

  //data$: Observable<Product[]> = this.ps.getAll();

  //products: Product[] = [];

  constructor(
    private ps: ProductService,
    private iService: ItemService,
  ) {
    // this.ps.getAll().subscribe(data => this.products = data);

    // this.iService.getAll().forEach(value => {
    //   console.log("All product: ", value);
    // });
    // this.iService.update({
    //   "id": 1,
    //   "catId": 4,
    //   "name": "Mona Lisa fake ",
    //   "description": "Leonardo da Vinci, 1503-1519",
    //   "image": "mona-lisa-c-1503-1519.jpg",
    //   "price": 61000,
    //   "stock": 102,
    //   "featured": true,
    //   "active": true,
    //   "specialOffer": true
    // }).forEach(value => {
    //   console.log("Updated: ", value);
    // });

    // this.iService.remove(5).forEach(value => {
    //   console.log("Deleted: ", value);
    // });
  }

}
