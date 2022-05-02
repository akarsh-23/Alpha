import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image!:string;
  resume!:string;
  constructor() {
   }

  ngOnInit(): void {
    this.image = '/assets/img/Profile.png';
    this.resume = '/assets/resume/resume.pdf';
  }

}
