import { Component, OnInit } from '@angular/core';
import { ClientserviceService } from '../clientservice.service';
import { Router } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  cpassword=""
    constructor(private clientservice:ClientserviceService,private route:Router) {}

  cli:Client=new Client(0,"","","","")

  passwordsMatch(){
    return this.cli.client_password===this.cpassword
  }

  clientSaving(register:any){
    if(register.valid){
      this.clientservice.addnewClient(this.cli).subscribe(data=>{
      console.log(data);
      this.showallClients();
      this.cli = new Client(0, "", "", "", "");
      this.cpassword = "";   
      })
    }
    else{
      alert("please fill all the details details")
    }
  }

  
  ngOnInit(): void {
    this.showallClients()
  }

allclients:Client[] = [];

showallClients()
{
  this.clientservice.showallClients().subscribe(data=>{
    this.allclients = data;
    console.log(data);
  });
}

delEmp(eno:number)
{
  console.log(eno)
  if(confirm("Are u sure to delete?")==true)
  {
    this.clientservice.deletecliInfoBasedOnId(eno).subscribe(data=>{
      this.showallClients();
    });
  }
}
}

