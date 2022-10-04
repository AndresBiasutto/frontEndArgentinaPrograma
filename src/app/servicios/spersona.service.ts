import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class SPersonaService {

  URL = "http://localhost:8080/persona";

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URL+ '/ver');
  }
}
