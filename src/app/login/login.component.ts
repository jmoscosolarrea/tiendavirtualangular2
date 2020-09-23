import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  enviarForm(form){
    console.log(form);
  }

}
