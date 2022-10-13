import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarContactoComponent } from './componentes/contactos/agregar-contacto/agregar-contacto.component';
import { EditarContactoComponent } from './componentes/contactos/editar-contacto/editar-contacto.component';
import { AgregarEduComponent } from './componentes/educacion/agregar-edu/agregar-edu.component';
import { EditarEduComponent } from './componentes/educacion/editar-edu/editar-edu.component';
import { AgregarExpLabComponent } from './componentes/experiencia-laboral/agregar-exp-lab/agregar-exp-lab.component';
import { EditarExpLabComponent } from './componentes/experiencia-laboral/editar-exp-lab/editar-exp-lab.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { AgregarPorfolioComponent } from './componentes/porfolio/agregar-porfolio/agregar-porfolio.component';
import { EditarPorfolioComponent } from './componentes/porfolio/editar-porfolio/editar-porfolio.component';
import { AgregarSkillComponent } from './componentes/skills/agregar-skill/agregar-skill.component';
import { EditarSkillComponent } from './componentes/skills/editar-skill/editar-skill.component';

const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"login", component:LoginComponent},
  {path:"agregarexp", component:AgregarExpLabComponent},
  {path:"editarexplab/:id", component:EditarExpLabComponent},
  {path:"agregaredu", component:AgregarEduComponent},
  {path:"editaredu/:id", component:EditarEduComponent},
  {path:"agregarskill", component:AgregarSkillComponent},
  {path:"editarskill/:id", component:EditarSkillComponent},
  {path:"agregarcontacto", component:AgregarContactoComponent},
  {path:"editarcontacto/:id", component:EditarContactoComponent},
  {path:"hero", component:HeroComponent},
  {path:"agregarporf", component:AgregarPorfolioComponent},
  {path:"editarporf/:id", component:EditarPorfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
