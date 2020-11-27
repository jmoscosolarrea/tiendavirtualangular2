import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';


@Component({
  selector: 'Productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  declarations: [BarraSuperiorComponent]
})
export class ProductosComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  productos1=[];
  ngOnInit() {
    
    this.httpService.getProductos()
      .subscribe(
        (data: Response) => this.mostrarProductos(data)
      )
  }
  
  mostrarProductos(productos) {
    console.log(productos);
    this.productos1 = productos;
    /*var long = productos.length;
    var bandera = false;
    for (var x = 0; x < long; x++) {
      var descripcion = productos[x].descripcion;
      var cantidad = productos[x].cantidad;
      var precio = productos[x].precio;
      var html = `<div class="itemMostrado">
                  <img class="itemMostrado" src="img/home.jpg" alt="">
                  <p>
                    <span>Descripción:${descripcion} </span><br>
                    <span>Cantidad:${cantidad}</span><br>
                    <span>Precio:${precio}</span><br>
                  </p>
              </div>`;
      
      document.getElementById("#mostrarDatos").append(html);
      console.log(html);
    }*/
  }

}
