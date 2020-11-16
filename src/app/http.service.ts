import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http : Http) { }

  getDatos(){
    return this.http.get('https://tienda-d52d6.firebaseio.com/usuarios/.json')
      .map((response: Response)=> response.json())
  }

  getProductos() {
    return this.http.get('https://tienda-d52d6.firebaseio.com/productos/.json')
      .map((response: Response) => response.json())
  }

}
