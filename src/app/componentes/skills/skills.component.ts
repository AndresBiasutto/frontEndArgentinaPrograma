import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SskillsService } from 'src/app/servicios/sskills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[] = [];
  estaLogeado = false;
  constructor(private sSkills: SskillsService, private tokenService: TokenService) { }



  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.estaLogeado = true;
    } else {
      this.estaLogeado = false;
    }
    
  }

  cargarExperiencia(): void {
    this.sSkills.lista().subscribe(data => { this.skills = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sSkills.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
