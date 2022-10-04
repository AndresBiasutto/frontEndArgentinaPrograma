import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/JwtDto';
import { LoginUsuario } from '../models/LoginUsuario';
import { NuevoUsuario } from '../models/nuevoUsuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL =  'http://localhost:8080/auth';

  constructor(private httpClient: HttpClient) { }

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.URL + '/login', loginUsuario)
 }
}
