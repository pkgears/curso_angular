import { Component } from "@angular/core";

@Component({
    selector: 'fruta',
    templateUrl:'./fruta.component.html'
})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, pera, sandia';
    
    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<string> = ['Carpintero','Albañil','Otro'];
    public cualquiera:Array<any> = ['Carpintero', 4 , true];

    constructor(){
        this.nombre = 'César Eduardo';
        this.edad = 24;
        this.mayorDeEdad = true;
        // Mala práctica llamar metodos en el construtor
        //this.holaMundo(this.nombre);
    }
    // ngOnInit método que se ejecuta al cargar el componente
    ngOnInit(){
        this.holaMundo(this.nombre);
    }

    holaMundo(nombre){
        console.log('Hola '+nombre);
    }
}