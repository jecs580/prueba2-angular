import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';
  public post:{
    tittle:'',
    body:'',
  }[]=[];
  constructor(private http:HttpClient) { }
  getPost():Observable<any[]>{
    return this.http.get<any[]>(`${this.BASE_URL}/posts/`);
  }
}
