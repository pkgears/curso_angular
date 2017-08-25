import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service'
import { Producto } from '../models/producto'
import { GLOBAL } from '../services/global'

@Component ({
   selector: 'producto-add',
   templateUrl: '../views/producto-add.html',
   providers:[ProductoService]
 })

 export class ProductoAddComponent{

   public title: string;
   public producto: Producto;
   public savedProduct;
   public filesToUpload;
   public resultUpload;
   public url = GLOBAL.url

   constructor(
     private _productoService: ProductoService,
     private _route: ActivatedRoute,
     private _router: Router
   ){
     this.title = "Crear nuevo producto";
     this.producto = new Producto('','','', '','');
   }

   ngOnInit(){}

   onSubmit(){
     this.saveProducto()
   }

   saveProducto(){
     //  console.log(this.producto);
      this._productoService.addProducto(this.producto).subscribe(
        (result)=> {
          this.saveProducto = result.json();
          console.log(this.saveProducto['id'])
          if(this.saveProducto && this.filesToUpload && this.filesToUpload.length >= 1){
            this._productoService.makeFileRequest(this.url+'/products/upload_image/'+this.saveProducto['id'], [], this.filesToUpload)
              .then(
                (error)=>{ console.log(error) }
              );
          }
        },
        error=>{console.log(<any>error)});
        this._router.navigate(['/productos'])
   }

   fileChangeEvent(fileInput: any){
     this.filesToUpload = <Array<File>>fileInput.target.files;
    //  console.log(this.filesToUpload)

   }

 }
