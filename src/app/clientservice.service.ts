import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ClientserviceService {
  getClients() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpclient:HttpClient) { }

  private apiurl="http://localhost:3000/Clients"

  addnewClient(cli:Client):Observable<Object>{
    return this.httpclient.post(`${this.apiurl}`,cli);
  }


  showallClients():Observable<Client[]>{
    return this.httpclient.get<Client[]>(`${this.apiurl}`);
  }

  deletecliInfoBasedOnId(id: any): Observable<Object> {
    return this.httpclient.delete(`${this.apiurl}/${id}`); 
  }

}
