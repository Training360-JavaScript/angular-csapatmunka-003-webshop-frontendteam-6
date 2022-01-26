import { preserveWhitespacesDefault } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform( products: Product[] | null ): Product[] | null {

    if ( !Array.isArray(products) ) {
      return products;
    }

    const result: Product[] = [];

    products.forEach(
      product => {
        result.splice( Math.floor(Math.random()*(1+result.length)), 0, product );
      }
    );

    return result;
  }

}
