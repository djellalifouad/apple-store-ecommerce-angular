import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http : HttpClient) { }
  list(): Observable<any[]> {
    return this.http.get('http://localhost:3003/categories') as Observable<any[]>
  }
}
