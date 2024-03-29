import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl="  http://localhost:3000/posts";

  constructor(private http:HttpClient) {}

  postData(data:any):Observable<any>{
  return this.http.post(this.apiUrl,data);
  }

  getData():Observable<any> {
  return this.http.get(this.apiUrl)
  }

}