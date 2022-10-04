import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { SeducacionService } from 'src/app/servicios/seducacion.service';

@Component({
  selector: 'app-editar-edu',
  templateUrl: './editar-edu.component.html',
  styleUrls: ['./editar-edu.component.css']
})
export class EditarEduComponent implements OnInit {

  educacion: Educacion = null;
  
  constructor(
    private educacionS: SeducacionService, private activatedRouter:ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

}
