import { Component } from '@angular/core';
//import { DataService } from '../data.service';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private usuarios: string[] = [];
  //constructor(private dataService: DataService, private httpService: HttpService)
  constructor(private httpService: HttpService, public router: Router)  {}

  enviarForm(form){

    this.httpService.getDatos()
      .subscribe(
        (data: Response) => this.validarUsuario(form.value.usuario, form.value.password, data)
      )
    }

    validarUsuario(usuario, clave, usuarios) {
      var long = usuarios.length;
      var bandera = false;
      for (var x=0;x<long;x++){
        var email = usuarios[x].email;
        var clave1 = usuarios[x].clave;
        if (usuario == email && clave == clave1){
          alert("Usuario encontrado");
          bandera = true;
          this.router.navigate(['productos']);
        }
      }
      if (bandera == false){
        alert("El usuario o la clave no coinciden - Favor revisar");
      }
    }

  }
