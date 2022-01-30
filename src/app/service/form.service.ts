import { FormInfo } from 'src/app/forminfo/form-info';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  info: FormInfo[] = [
    { key: 'id', type: 'number', text: '#', i: 0},
    { key: 'catId', type: 'number', text: 'Category ID', i: 0},
    { key: 'name', type: 'text', text: 'Name', i: 1},
    { key: 'description', type: 'text', text: 'Description', i: 1},
    { key: 'image', type: 'text', text: 'Image', i: 1},
    { key: 'price', type: 'number', text: 'Price', i: 0},
    { key: 'stock', type: 'number', text: 'Stock', i: 0},
    { key: 'featured', type: 'checkbox', text: 'Featured', i: 2},
    { key: 'active', type: 'checkbox', text: 'Active', i: 2},
    { key: 'specialOffer', type: 'checkbox', text: 'Special Offer', i: 2},
  ]

  constructor() { }
}
