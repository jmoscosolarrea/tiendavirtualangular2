import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'Productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getProductos()
      .subscribe(
        (data: Response) => this.mostrarProductos(data)
      )
  }
  
  mostrarProductos(productos) {
    var long = productos.length;
    var bandera = false;
    for (var x = 0; x < long; x++) {
      var descripcion = productos[x].descripcion;
      var cantidad = productos[x].cantidad;
      var precio = productos[x].precio;
    }
  }

}
