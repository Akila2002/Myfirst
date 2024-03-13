import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://appspos.apdeliver.com/AppsPOSDemoSAS/api/apis/Get_Category_By_ProductId';

  constructor(private http: HttpClient) {}

  getProductDetails(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl,data);

    }
  }
