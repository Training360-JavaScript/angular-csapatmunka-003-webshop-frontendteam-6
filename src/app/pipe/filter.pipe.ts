import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(
    products: Product[] | null,
    options: { name?: string, active?: boolean, specialOffer?: boolean, featured?: boolean, categoryId?: number }
  ): Product[] | null {

    if (!Array.isArray(products)) {
      return products;
    }

    let result = products;

    if (options.name) {
      const s = options.name.toLocaleLowerCase();
      result = result.filter(product => product.name.toLocaleLowerCase().includes(s));
    }

    if (Object.keys(options).includes('active')) {
      result = result.filter(product => product.active === options.active);
    }

    if ( options?.specialOffer ) {
      result = result.filter(product => product.specialOffer === options.specialOffer);
    }

    if ( options?.featured ) {
      result = result.filter(product => product.featured === options.featured);
    }

    if (Object.keys(options).includes('categoryId')) {
      result = result.filter(product => product.catId === options.categoryId);
    }

    return result;
  }

}
