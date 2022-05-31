import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  constructor(private http: HttpClient) {

  }
  makeOrder(map: any): Observable<any> {
   return this.http.post('http://localhost:3003/order',map);
  }
}
