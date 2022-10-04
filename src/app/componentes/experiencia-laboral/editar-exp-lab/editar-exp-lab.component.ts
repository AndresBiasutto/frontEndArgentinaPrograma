import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { SexperienciaService } from 'src/app/servicios/sexperiencia.service';

@Component({
  selector: 'app-editar-exp-lab',
  templateUrl: './editar-exp-lab.component.html',
  styleUrls: ['./editar-exp-lab.component.css']
})
export class EditarExpLabComponent implements OnInit {
  expLab:ExperienciaLaboral=null;
  nombreE:string=""
  descripcionE:string=""
  constructor(private sExperiencia: SexperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}
