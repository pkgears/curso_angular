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

    constructor(){
         this.empleado = new Empleado('César Ortíz', 24, 'Jefe', true);
         this.trabajadores= [
             new Empleado('César Ortíz', 24, 'Jefe', true),
             new Empleado('Eduardo Salazar', 34, 'Subjefe', true),
             new Empleado('Pedro Lopez', 24, 'Administrativo', true)
         ]
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }
}
