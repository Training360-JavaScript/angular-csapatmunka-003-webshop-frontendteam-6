import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T> implements PipeTransform {

  transform(value: T[] | null, phrase: string = ""): T[] | null {
    if (!Array.isArray(value) || !phrase) {
      return value;
    }
    phrase = phrase.toLowerCase();
    return value.filter(
      item => Object.values(item).join("").toLowerCase().includes(phrase)
    );
  }

}
