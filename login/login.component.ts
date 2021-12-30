import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  email:string="";
  pwd:string="";
  email_sign="";
  pwd_sign:string="";
  token:string="";

  constructor(private serviceObj:LoginService, private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
  }

  login_click()
  {
    let requestedRouteUrl =  this.route.snapshot.queryParams["returnUrl"];

      if(requestedRouteUrl == null)
      {
        requestedRouteUrl = "/" ;
      }
      this.serviceObj.login(this.email,this.pwd).subscribe(response=> {
        this.token = response.accessToken;
        sessionStorage.setItem("Auth_Token",this.token)
        console.log(this.token);
        this.router.navigate([requestedRouteUrl]);

      }
        );
      
  }
  signup_click()
  {
    this.serviceObj.signup(this.email_sign,this.pwd_sign).subscribe(response=> {
      this.token = response.accessToken;
      console.log(this.token);
    }
      );

  }
}
