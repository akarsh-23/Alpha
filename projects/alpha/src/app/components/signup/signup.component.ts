import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }
  image!:string;
  
  ngOnInit(): void {
    this.image = '/assets/img/login.jpg'
  }
  isMatch(body:any):any{
    if(body.password==body.confirmPassword) return true;
    else false;
  }
  body = {}
  signup(body:any): void{
    this.body = body;
    if(body.password==body.confirmPassword) console.log(true);
    console.log(this.body);
    this.router.navigate(['/login']);
  }
}
