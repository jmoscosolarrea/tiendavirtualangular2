import { Injectable } from '@angular/core';
import {LogService} from './log.service';
import {HttpService} from './http.service';
import { Response } from '@angular/http';

@Injectable()
export class DataService {
  private usuarios: string[] = [];

  //constructor(private logService: LogService, private httpService: HttpService) { }
  constructor(private httpService: HttpService) { }

  newUser(nombre: string){
    this.usuarios.push(nombre);
    //this.logService.escribirLog('Se añadió el usuario '+ nombre);
  }

  getUsers(){
    this.httpService.getDatos()
      .subscribe(
         (data: Response) => console.log('Data: ' + data)
      )
    return this.usuarios;
  }

}
