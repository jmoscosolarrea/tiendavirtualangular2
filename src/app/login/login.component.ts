import { Component } from '@angular/core';
//import { Login } from '.login/login.component';
//import { Login } from './login.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{ //implements OnInit {
  
  enviarForm(form){
    console.log(form);
  }
  //constructor() { }

  //ngOnInit() {
  //}

}
