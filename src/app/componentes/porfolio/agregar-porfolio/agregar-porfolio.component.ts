import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Porfolio } from 'src/app/models/porfolio';
import { SporfolioService } from 'src/app/servicios/sporfolio.service';

@Component({
  selector: 'app-agregar-porfolio',
  templateUrl: './agregar-porfolio.component.html',
  styleUrls: ['./agregar-porfolio.component.css']
})
export class AgregarPorfolioComponent implements OnInit {

  titulo: string = '';
  link: string = '';
  tecnologias: string =''
  imagen: string = '';
  constructor(private sporfolio: SporfolioService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const porfolio = new Porfolio(this.titulo, this.link, this.tecnologias, this.imagen);
    this.sporfolio.save(porfolio).subscribe(
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
