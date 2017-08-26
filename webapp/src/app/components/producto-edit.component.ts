import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

@Component ({
   selector: 'producto-edit',
   templateUrl: '../views/producto-add.html',
   providers:[ProductoService]
 })

 export class ProductoEditComponent{
   public titulo: string;
   public producto: Producto;
   public savedProducto;
   public filesToUpload;
   public resultUpload;
   public url = GLOBAL.url

   constructor(
     private _route: ActivatedRoute,
     private _router: Router,
     private _productoService: ProductoService
   ){
     this.titulo = "Editar producto";
     this.url = GLOBAL.url;
     this.producto = new Producto('','','','','')
   }

   ngOnInit(){
     this.getProducto();
    //  console.log(this.titulo)
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

   onSubmit(){
     this.saveProducto()
   }

   saveProducto(){
     //  console.log(this.producto);
      this._productoService.updateProducto(this.producto).subscribe(
        (result)=> {
          this.savedProducto = result.json();
          // console.log(this.savedProducto['id'])
          if(this.savedProducto && this.filesToUpload && this.filesToUpload.length >= 1){
            this._productoService.makeFileRequest(this.url+'/products/upload_image/'+this.savedProducto['id'], [], this.filesToUpload)
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
