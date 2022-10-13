import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { SPersonaService } from 'src/app/servicios/spersona.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  usuario:Persona[]= [];
  nombre:string="";
  apellido:string="";
  sobreMi:string="";
  imagen:string="";
  puesto:string="";
  isLoged:String="";
  constructor(private userService:SPersonaService) { }

  ngOnInit(): void {
    this.userService.getPersona().subscribe(data => {
      this.usuario = data;
      this.nombre= this.usuario[0].nombre;
      this.apellido= this.usuario[0].apellido;
      this.sobreMi= this.usuario[0].sobreMi;
      this.imagen= this.usuario[0].imagen;
      this.puesto= this.usuario[0].puesto;
    })
    
  }
}
