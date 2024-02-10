import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }

  isLoggedin(){
    return sessionStorage.getItem('user')!=null;
  }
}
