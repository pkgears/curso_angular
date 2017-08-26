import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';

@Injectable()
export class ProductoService{
    public url: string;

    constructor(
      public _http: Http
    ){
      this.url = GLOBAL.url
    }

    getProductos(){
      return this._http.get(this.url+'/products.json').map(res=>res.json())
    }

    getProducto(id){
      return this._http.get(this.url+'/products/'+id).map(res=>res.json())
    }

    addProducto(producto: Producto){
      let json = JSON.stringify(producto);
      let params = 'product='+json;
      let headers = new Headers({'Content-Type': 'application/json'});

      return this._http.post(this.url+'/products', json, {headers:headers})//.map(res=>res.json)
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>){
      return new Promise( (resolve, reject) => {
          var formData: any = new FormData();
          var xhr = new XMLHttpRequest();
          for (let i = 0; i < files.length; i++) {
            formData.append('image', files[i], files[i].name)
          }
          xhr.onreadystatechange = function(){
            if (xhr.readyState == 4){
              if(xhr.status ==  200){
                resolve(JSON.parse(xhr.response));
              }else{
                  reject(xhr.response);
              }
            }
          };
          xhr.open("POST", url, true);
          xhr.send(formData);
      });
    }
}
