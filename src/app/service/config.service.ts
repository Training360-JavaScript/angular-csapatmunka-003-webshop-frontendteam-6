import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Sample Webshop';

  menuItems: IMenuItem[] = [
    {text: 'Főoldal', link: '/', icon: 'home'},
    {text: 'Portré', link: '/portre'},
    {text: 'Csendélet', link: '/kategoria/csendelet'},
  ];

  cardImageFolder: string = '/assets/art/';
  cardImagePostfix: string = '!PinterestSmall.jpg';
  fullImageFolder: string = '/assets/art/';
  fullImagePostfix: string = '';
  fullImageTimeout: number = 10000;
  specialOfferPercent: number = 80;

  constructor() { }
}
