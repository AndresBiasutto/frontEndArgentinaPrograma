import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Porfolio } from 'src/app/models/porfolio';
import { SporfolioService } from 'src/app/servicios/sporfolio.service';

@Component({
  selector: 'app-editar-porfolio',
  templateUrl: './editar-porfolio.component.html',
  styleUrls: ['./editar-porfolio.component.css']
})
export class EditarPorfolioComponent implements OnInit {

  
  porfolio: Porfolio = null;
  
  constructor(
    private porfolioS: SporfolioService, private activatedRouter:ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.porfolioS.detail(id).subscribe(
      data =>{
        this.porfolio = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.porfolioS.update(id, this.porfolio).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }
}
