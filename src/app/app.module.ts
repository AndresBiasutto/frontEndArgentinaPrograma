import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { MainComponent } from './componentes/main/main.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { AgregarExpLabComponent } from './componentes/experiencia-laboral/agregar-exp-lab/agregar-exp-lab.component';
import { EditarExpLabComponent } from './componentes/experiencia-laboral/editar-exp-lab/editar-exp-lab.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AgregarEduComponent } from './componentes/educacion/agregar-edu/agregar-edu.component';
import { EditarEduComponent } from './componentes/educacion/editar-edu/editar-edu.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { AgregarSkillComponent } from './componentes/skills/agregar-skill/agregar-skill.component';
import { EditarSkillComponent } from './componentes/skills/editar-skill/editar-skill.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { AgregarContactoComponent } from './componentes/contactos/agregar-contacto/agregar-contacto.component';
import { EditarContactoComponent } from './componentes/contactos/editar-contacto/editar-contacto.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { AboutComponent } from './componentes/about/about.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { AgregarPorfolioComponent } from './componentes/porfolio/agregar-porfolio/agregar-porfolio.component';
import { EditarPorfolioComponent } from './componentes/porfolio/editar-porfolio/editar-porfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    MainComponent,
    LoginComponent,
    ExperienciaLaboralComponent,
    AgregarExpLabComponent,
    EditarExpLabComponent,
    EducacionComponent,
    AgregarEduComponent,
    EditarEduComponent,
    SkillsComponent,
    AgregarSkillComponent,
    EditarSkillComponent,
    ContactosComponent,
    AgregarContactoComponent,
    EditarContactoComponent,
    HeroComponent,
    AboutComponent,
    PorfolioComponent,
    AgregarPorfolioComponent,
    EditarPorfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
