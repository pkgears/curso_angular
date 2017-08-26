import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service'
import { Producto } from '../models/producto'
import { GLOBAL } from '../services/global'

@Component ({
   selector: 'producto-details',
   templateUrl: '../views/producto-details.html',
   providers:[ProductoService]
 })

export class ProductoDetailsComponent {
  public titulo: string;
  public producto: Producto;
  public url: string;

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.url = GLOBAL.url
    this.titulo = 'Detalles de producto';
  }

  ngOnInit(){
    this._productoService.getProducto;
    this.getProducto()
  }

  getProducto(){
    this._route.params.forEach( (params: Params) => {
      let id = params['id']
      this._productoService.getProducto(id).subscribe(
        response =>{
          if(response.id){
            this.producto = response
          }
        },
        error =>{
          this._router.navigate(['not_found'])
          console.log(<any>error)
        }
      );
    });
  }
}
