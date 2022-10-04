import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contactos } from 'src/app/models/contactos';
import { ScontactosService } from 'src/app/servicios/scontactos.service';

@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.css']
})
export class AgregarContactoComponent implements OnInit {

  nombre: string = '';
  link: string = '';
  imagen: string = '';
  constructor(private scontacto: ScontactosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Contactos(this.nombre, this.link, this.imagen);
    this.scontacto.save(educacion).subscribe(
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
