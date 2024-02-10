import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  adminname=sessionStorage.getItem('user_name')
  constructor(private route:Router){}

  project(){
    this.route.navigate(['/projectinfo'])
  }
  task(){
    this.route.navigate(['/taskinfo'])
  }
  client(){
    this.route.navigate(['/clientinfo'])
  }
  meeting(){
    this.route.navigate(['/clientmeeting'])
  }

}
