import { Component } from "@angular/core";

@Component({
    selector: 'fruta',
    templateUrl:'./fruta.component.html'
})

export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, pera, sandia';
    
    public nombre:string = 'César Eduardo';
    public edad:number = 24;
    public mayorDeEdad:boolean = true;
    public trabajos:Array<string> = ['Carpintero','Albañil','Otro'];
    public cualquiera:Array<any> = ['Carpintero', 4 , true];
}