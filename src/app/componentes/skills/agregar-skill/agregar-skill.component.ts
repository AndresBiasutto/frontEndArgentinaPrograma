import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SskillsService } from 'src/app/servicios/sskills.service';

@Component({
  selector: 'app-agregar-skill',
  templateUrl: './agregar-skill.component.html',
  styleUrls: ['./agregar-skill.component.css']
})
export class AgregarSkillComponent implements OnInit {

  
  nombre: string = '';
  imagen: string = '';
  nivelSkill: number = 0;

  constructor(private sSkill: SskillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skills(this.nombre, this.imagen, this.nivelSkill);
    this.sSkill.save(skill).subscribe(
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
