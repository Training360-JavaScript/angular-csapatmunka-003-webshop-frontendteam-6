import { IMenuItem } from './config.service';
import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
  id?: string;
}

export interface ICategory {
  id: number;
  name: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Sample Webshop';

  categoryList: ICategory[] = [
    { id: 1, name: 'Portré', key: 'portre' },
    { id: 2, name: 'Csendélet', key: 'csendelet' },
    { id: 3, name: 'Tájkép', key: 'tajkep' },
  ]

  menuItems: IMenuItem[] = [
    {text: 'Főoldal', link: '/', icon: 'fa-home'},
    ... this.categoryList.map( (category: ICategory) : IMenuItem => {
      return {text: category.name, link: `/kategoria/${category.key}`};
    } ),
    {text: 'Admin', link: '/admin', icon: 'fa-cog'}
  ];

  cardImageFolder: string = '/assets/art/';
  cardImagePostfix: string = '!PinterestSmall.jpg';
  fullImageFolder: string = '/assets/art/';
  fullImagePostfix: string = '';
  fullImageTimeout: number = 10000;
  specialOfferPercent: number = 80;

  constructor() {
    console.log(this.menuItems);

  }
}
