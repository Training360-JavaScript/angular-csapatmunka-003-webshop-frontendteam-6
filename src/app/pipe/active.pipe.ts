import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'active'
})
export class ActivePipe implements PipeTransform {

  transform( products: Product[] | null ): Product[] | null {

    if ( ! Array.isArray(products) ) {
      return products;
    }

    return products.filter( product => product.active);

  }

}
