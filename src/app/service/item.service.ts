import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}
)
export class ItemService {
  jsonUrl: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }

  getOne(id: string | number): Observable<Product> {
    return this.http.get<Product>(`${this.jsonUrl}/${id}`);
  }
  add(list: Product): Observable<any> {
    return this.http.post<Observable<any>>(this.jsonUrl, list);
  }

  update(list: Product): Observable<any> {
    return this.http.put(`${this.jsonUrl}/${list.id}`, list);
  }

  remove(list: any): Observable<any> {
    list = list.id ? list.id : list;
    return this.http.delete(`${this.jsonUrl}/${list}`);
  }
}

