import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Porfolio } from '../models/porfolio';

@Injectable({
  providedIn: 'root'
})
export class SporfolioService {

  URL = "http://localhost:8080/porfolio";
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Porfolio[]>{
    return this.httpClient.get<Porfolio[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Porfolio>{
    return this.httpClient.get<Porfolio>(this.URL + `/detail/${id}`);
  } 

  public save(porfolio: Porfolio): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', porfolio);
  }

  public update(id: number, porfolio: Porfolio): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, porfolio);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
