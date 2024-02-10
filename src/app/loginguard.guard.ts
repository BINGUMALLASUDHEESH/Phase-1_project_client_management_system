import { CanActivateFn, Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';
import { inject } from '@angular/core';



const cliserev=new LoginserviceService();
export const loginguardGuard: CanActivateFn = (route, state) => {
  let clientcheck=cliserev.isLoggedin()
  const router=inject(Router)
  console.log("user login",clientcheck)
  let ucheck=false
  if(clientcheck===true){
    ucheck=true
  }
  else{
    alert("please login first")
    router.navigate(["/login"])
    ucheck=false
  }
  return ucheck;
};
