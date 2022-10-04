import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { SexperienciaService } from 'src/app/servicios/sexperiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  expe: ExperienciaLaboral[] = [];
  estaLogeado = false;
  constructor(private sExperiencia: SexperienciaService, private tokenService: TokenService) { }



  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }
    
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
