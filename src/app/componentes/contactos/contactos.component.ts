import { Component, OnInit } from '@angular/core';
import { ScontactosService } from 'src/app/servicios/scontactos.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Contactos } from 'src/app/models/contactos';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  contactos:Contactos[]=[];
  estaLogeado = false;

  constructor(private contactoS: ScontactosService, private tokenService: TokenService) { }
  

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }
  }

  cargarEducacion(): void{
    this.contactoS.lista().subscribe(
      data =>{
        this.contactos = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.contactoS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
