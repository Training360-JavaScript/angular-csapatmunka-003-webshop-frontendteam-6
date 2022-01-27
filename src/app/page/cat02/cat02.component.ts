import { Product } from './../../model/product';
import { ICategory } from './../../service/config.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {

  constructor( private am: ActivatedRoute,
               private cs: ConfigService,
               private ps: ProductService ) {}

  name: string | boolean = '';
  category: ICategory | undefined = undefined;
  products: Observable<Product[]> = this.ps.getAll();
  categoryNotExists: boolean = false;

  ngOnInit(): void {

    this.am.params.subscribe( params => {

      this.category = this.cs.categoryList.find(
        ( c: ICategory ): boolean => {
          return c.key == params['name'];
        }
      );

      if ( typeof this.category == 'undefined') {
        this.categoryNotExists = true;
      } else {
        this.name = this.category.name;
      }
    } );
  }

}
