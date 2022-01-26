import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform( products: Product[] | null, key: string, direction: string ): Product[] | null {

    if ( !Array.isArray(products) || !key ) {
      return products;
    }

    products.sort(
      ( a: any, b: any ) =>
          typeof a[key]==='boolean' && typeof b[key]==='boolean'
        ?
          Number(b[key]) - Number(a[key])
        :
            typeof a[key]==='number' && typeof b[key]==='number'
          ?
            a[key] - b[key]
          :
            String(a[key]).localeCompare(String(b[key]))
    );

    if ( direction === 'descend' ) {
      products.reverse();
    }

    return products;

  }

}
