import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contactos } from 'src/app/models/contactos';
import { ScontactosService } from 'src/app/servicios/scontactos.service';

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit {

  contactos: Contactos = null;
  
  constructor(
    private sContactos: ScontactosService, private activatedRouter:ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sContactos.detail(id).subscribe(
      data =>{
        this.contactos = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sContactos.update(id, this.contactos).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

}
