export class ExperienciaLaboral {
    id?:number;
    empresa:string;
    descripcion:string;
    fechaInicio:string;
    fechaFin:string;
    puesto:string;
    imagen:string;

    constructor(empresa:string, descripcion:string, fechaInicio:string, fechaFin:string, puesto:string, imagen:string){
        this.empresa=empresa;
        this.descripcion=descripcion;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;
        this.puesto=puesto;
        this.imagen=imagen;
    }
}
