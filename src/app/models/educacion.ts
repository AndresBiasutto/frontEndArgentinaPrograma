export class Educacion{
    id?: number;
    institucion: string;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;
    imagen:string;
    titulo:string;

    constructor(institucion:string, descripcion:string, fechaInicio:string, fechaFin:string, imagen:string, titulo:string){
        this.institucion= institucion;
        this.descripcion=descripcion;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;
        this.imagen=imagen;
        this.titulo=titulo;
    }
}