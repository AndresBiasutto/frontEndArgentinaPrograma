import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { SPersonaService } from 'src/app/servicios/spersona.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  usuario:Persona[]= [];
  nombre:string="";
  isLoged:String="";
  constructor(private userService:SPersonaService) { }

  ngOnInit(): void {
    this.userService.getPersona().subscribe(data => {
      this.usuario = data;
      this.nombre= this.usuario[0].nombre;
    })
    
  }

}
