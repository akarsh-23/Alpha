import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  response:any[] = [];
  ngOnInit(): void {
  }
  login(loginForm:any):void{
    this.loginService.login(loginForm.email, loginForm.password).subscribe(response => this.response = response);
    console.log(this.response);
  }
}
