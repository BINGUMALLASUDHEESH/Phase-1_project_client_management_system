import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 
    isAdmin=false
    isClient=false
    constructor(private router:Router){}
  ngDoCheck(): void {
    let url=this.router.url //getting the url
    console.log(url)
    if(url==="/home" || url==="/clientinfo"|| url==="/projectinfo" ||url==="/taskinfo" || url==="/clientmeeting"){
      this.isAdmin=true
      this.isClient=false
    }
    else if(url=="/projects"){
      this.isAdmin=false
      this.isClient=true
    }
    else{
      this.isAdmin=false
      this.isClient=false
    }
  }
}

