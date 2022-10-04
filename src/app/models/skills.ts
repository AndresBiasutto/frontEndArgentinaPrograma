export class Skills{
    id?:number;
    nombre:string;
    imagen:string;
    nivelSkill:number;

    constructor(nombre:string, imagen:string, nivelSkill:number){
        this.nombre=nombre;
        this.imagen=imagen;
        this.nivelSkill=nivelSkill;
    }
}