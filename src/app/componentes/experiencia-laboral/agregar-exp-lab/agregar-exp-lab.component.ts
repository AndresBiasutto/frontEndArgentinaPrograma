import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { SexperienciaService } from 'src/app/servicios/sexperiencia.service';

@Component({
  selector: 'app-agregar-exp-lab',
  templateUrl: './agregar-exp-lab.component.html',
  styleUrls: ['./agregar-exp-lab.component.css']
})
export class AgregarExpLabComponent implements OnInit {

  empresa: string = "";
  descripcion: string = "";
  fechaInicio: string = "";
  fechaFin: string = "";
  puesto: string = "";
  imagen: string = "";

  constructor(private sExperiencia: SexperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    
    const experiencia = new ExperienciaLaboral(this.empresa
      , this.descripcion
      , this.fechaInicio
      , this.fechaFin
      , this.puesto
      , this.imagen);
    this.sExperiencia.save(experiencia).subscribe(
      data => {
        alert("experiencia añadida exitosamente")
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
/*
this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
*/