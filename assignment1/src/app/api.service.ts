import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datamodel } from './datamodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  url: any = 'http://localhost:3000/products';

  getData(): Observable<Datamodel> {
    return this.http.get<Datamodel>(this.url);
  }
  getProductById(id: number): Observable<Datamodel> {
    return this.http.get<Datamodel>(this.url + '/' + id);
  }
  // removeProductById(id: number): Observable<Datamodel> {
  //   return this.http.get<Datamodel>(this.url + '/' + id);
  // }
}
