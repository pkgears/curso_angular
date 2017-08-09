import { Component } from "@angular/core";
import { Empleado } from './empleado';

@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public nombre_componente = 'Componente de Empleados';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
         this.empleado = new Empleado('César Ortíz', 24, 'Jefe', true);
         this.trabajadores= [
             new Empleado('César Ortíz', 24, 'Jefe', true),
             new Empleado('Eduardo Salazar', 34, 'Subjefe', false),
             new Empleado('Pedro Lopez', 24, 'Administrativo', true)
         ];
        this.trabajador_externo = true;
        this.color = 'green';
        this.color_seleccionado = '#ccc'
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor
    }

    cambiarColor(value){
        this.color = value
    }
}
