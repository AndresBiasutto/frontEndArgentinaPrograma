import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  
  constructor() { }
  private enviarMensajeSubject = new Subject<String>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  enviarMensaje(mensaje:String){
    
    this.enviarMensajeSubject.next(mensaje);

  }
}
