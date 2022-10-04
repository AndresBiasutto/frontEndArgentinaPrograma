export class Persona{
    idUsuario?:number;
    nombre:string;
    apellido:string;
    sobreMi:string;
    imagen:string;
    puesto:string;

    constructor(nombre:string, apellido:string, nacimiento:string, sobreMi:string, imagen:string, puesto:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.imagen=imagen;
        this.sobreMi=sobreMi;
        this.imagen=imagen;
        this.puesto=puesto;
    }
}