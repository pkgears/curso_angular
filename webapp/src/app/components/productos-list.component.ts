import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service'
import { Producto } from '../models/producto'
@Component ({
   selector: 'productos-list',
   templateUrl: '../views/productos-list.html',
   providers:[ProductoService]
 })

 export class ProductosListComponent{

   public titulo: string;
   public productos: Producto[];

   constructor(
     private _route: ActivatedRoute,
     private _router: Router,
     private _productoService: ProductoService
  ){
     this.titulo = 'Lista de Productos';
   }

   ngOnInit(){
    //  console.log('Componente de Lista de Productos cargado');
     this._productoService.getProductos().subscribe(
       result=>{
         this.productos = result;
         console.log(this.productos);
       },
       error=>{
         console.log(<any>error)
       }
     );
   }

 }
