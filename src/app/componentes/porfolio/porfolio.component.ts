import { Component, OnInit } from '@angular/core';
import { Porfolio } from 'src/app/models/porfolio';
import { SporfolioService } from 'src/app/servicios/sporfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {

  porfolio: Porfolio[] = [];
  estaLogeado = false;

  constructor(private porfolioS: SporfolioService, private tokenService: TokenService) { }
  

  ngOnInit(): void {
    this.cargarPorfolio();
    if(this.tokenService.getToken()){
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }
  }

  cargarPorfolio(): void{
    this.porfolioS.lista().subscribe(
      data =>{
        this.porfolio = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.porfolioS.delete(id).subscribe(
        data => {
          this.cargarPorfolio();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}
