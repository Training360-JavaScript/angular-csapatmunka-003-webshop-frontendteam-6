import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  jsonUrl: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }

  addNewProduct(product: Product): Observable<any> {
    return this.http.post<Observable<any>>(this.jsonUrl, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.jsonUrl}/${product}`, product);
  }

  removeProduct(product: any): Observable<any> {
    product = product.id ? product.id : product;
    return this.http.delete(`${this.jsonUrl}/${product}`);
  }

  
}
