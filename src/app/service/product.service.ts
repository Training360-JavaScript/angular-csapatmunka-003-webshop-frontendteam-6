import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
<<<<<<< HEAD

  jsonUrl: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }
=======
  jsonUrl: string = "http://localhost:3000/list";
>>>>>>> main

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }
<<<<<<< HEAD

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

  
=======
  
  get(id: number):Observable<Product> {
    return this.http.get<Product>(`${this.jsonUrl}/${id}`);
  }

  add(product: Product): Observable<any> {
    return this.http.post<Observable<any>>(this.jsonUrl, product);
  }

  update(product: Product): Observable<any> {
    return this.http.patch(`${this.jsonUrl}/${product.id}`, product);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.jsonUrl}/${id}`);
  }

  constructor(private http: HttpClient) { }

>>>>>>> main
}
