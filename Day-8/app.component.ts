import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  
{
  
  check_token:any;
  do_check():boolean
  {
    if(sessionStorage.getItem("Auth_Token")== null)
    {
        return true;
    }
    return false;
  }
  logout()
  {
    sessionStorage.removeItem("Auth_Token");
  }
  
}
