export class Porfolio{
    id?:number;
    titulo:string;
    link:string;
    tecnologias:string;
    imagen:string;

    constructor(titulo:string, link:string, tecnologias:string, imagen:string){
        this.titulo=titulo;
        this.link=link;
        this.tecnologias=tecnologias;
        this.imagen=imagen;
    }
}