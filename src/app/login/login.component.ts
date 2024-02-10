import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientserviceService } from '../clientservice.service';
import { Client } from '../client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  username = "";
  password = "";
  clients: Client[] = [];


  ngOnInit(): void {
    
      
  }
  constructor(private router: Router, private clientservice: ClientserviceService) {
    sessionStorage.clear()
   }
   detailsCheck(formLogin: any) {
    if (formLogin.valid) {
        if (this.username === "admin@gmail.com" && this.password === "admin@123") {
            sessionStorage.setItem('user', this.username);
            this.router.navigate(['/home']);
        } 
        else {
            this.clientservice.showallClients().subscribe(data => {
                this.clients = data;
                let chk = false;
                for (let i = 0; i < this.clients.length; i++) {
                    if (this.clients[i].client_email === this.username && this.clients[i].client_password === this.password) {
                      sessionStorage.setItem('user',this.username)
                      sessionStorage.setItem("client_name",this.clients[i].client_name)
                      sessionStorage.setItem("client_id",this.clients[i].id.toString())
                        chk = true;
                        break;
                    }
                }
                if (chk) {
                    this.router.navigate(["/projects"]);
                } 
                else {
                    alert("Please check username and password");
                }
            });
        }
    } 
    else {
        alert("Please fill the username and password fields.");
    }
}

}

