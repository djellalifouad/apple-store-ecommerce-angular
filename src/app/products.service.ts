import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {
  }
 list(category : string , search : string ): Observable<any[]> {
    return this.http.get('http://localhost:3003/products?category='+ category + '&search=' + search) as Observable<any[]>
  }
  productDetails(id: string ): Observable<any> {
    return this.http.get('http://localhost:3003/products/'+ id);
  }
}
