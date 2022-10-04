import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';

import { SeducacionService } from 'src/app/servicios/seducacion.service';

@Component({
  selector: 'app-agregar-edu',
  templateUrl: './agregar-edu.component.html',
  styleUrls: ['./agregar-edu.component.css']
})
export class AgregarEduComponent implements OnInit {

  institucion: string = '';
  descripcion: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  titulo: string = '';
  imagen: string = '';
  constructor(private seducacion: SeducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.institucion, this.descripcion, this.fechaInicio, this.fechaFin, this.titulo, this.imagen);
    this.seducacion.save(educacion).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
