import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
estaLogeado=false;
  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.estaLogeado= true;
    }else{
      this.estaLogeado=false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
