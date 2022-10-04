import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactos } from '../models/contactos';

@Injectable({
  providedIn: 'root'
})
export class ScontactosService {

  URL = "http://localhost:8080/contactos";
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Contactos[]>{
    return this.httpClient.get<Contactos[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Contactos>{
    return this.httpClient.get<Contactos>(this.URL + `/detail/${id}`);
  } 

  public save(contacto: Contactos): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', contacto);
  }

  public update(id: number, contacto: Contactos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, contacto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
