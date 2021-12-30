import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivateAuthGaurdService implements CanActivate 
{

  constructor(private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  
  {
     //console.log("In Auth gaurd")
     if(sessionStorage.getItem("Auth_Token") == null)
     {
       this.route.navigate(["/login"],{ queryParams : {"returnUrl":state.url}});
       return false;
     }
     else
     {
       return true;
     }
      
  }
}
