import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service'
import { Producto } from '../models/producto'

@Component ({
   selector: 'producto-add',
   templateUrl: '../views/producto-add.html',
   providers:[ProductoService]
 })

 export class ProductoAddComponent{

   public title: string;
   public producto: Producto;

   constructor(){
     this.title = "Crear nuevo producto"
     this.producto = new Producto('','','', '','')
   }

   ngOnInit(){}

   onSubmit(){
     console.log(this.producto)
   }

 }
