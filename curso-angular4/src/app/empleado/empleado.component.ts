import { Component } from "@angular/core";

@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public nombre_componente = 'Componente de Empleados';
    public lista_empleados = 'César, Pedro y Alguien';
}
