import { Component } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
    selector:'contacto',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public titulo = "Página de Contacto"
    public params;
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}
    
    ngOnInit(){
        this._route.params.forEach((params: Params) => {
            this.params = params['page']
        });   
    }

    redirigir(){
        this._router.navigate(['/contacto','CesarEduardo'])
    }
}