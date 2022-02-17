import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  body = {
    email: "",
    password: "",
  }
  constructor(private http:HttpClient) { }
  login(email:string, password:string):Observable<any[]>{
    this.body.email = email;
    this.body.password = password;
    return this.http.post<any[]>(`http://localhost:8001/alpha/LoginController`,this.body, httpOptions);
  }
}
