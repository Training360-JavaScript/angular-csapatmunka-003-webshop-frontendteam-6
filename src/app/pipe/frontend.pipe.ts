import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'frontend'
})
export class FrontendPipe implements PipeTransform {

  transform( products: Product[] | null, length: number = 5 ): Product[] | null {

  if ( ! Array.isArray(products) ) {
    return products;
  }

  return products.slice( 0, length );

}

}
