export class Contactos{
    id?:number;
    nombre:string;
    imagen:string;
    link:string;

    constructor(nombre:string, imagen:string, link:string){
        this.nombre=nombre;
        this.imagen=imagen;
        this.link=link;
    }
}