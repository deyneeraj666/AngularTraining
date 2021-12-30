import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit 
{
  email_sign="";
  pwd_sign:string="";
  token:string="";
  constructor(private serviceObj:LoginService, private router:Router,private route:ActivatedRoute ) { }
  signup_click()
  {
    let requestedRouteUrl =  this.route.snapshot.queryParams["returnUrl"];

      if(requestedRouteUrl == null)
      {
        requestedRouteUrl = "/" ;
      }
    this.serviceObj.signup(this.email_sign,this.pwd_sign).subscribe(response=>
    {
          this.token = response.accessToken;
          sessionStorage.setItem("Auth_Token",this.token)
          console.log(this.token);
          this.router.navigate(['/']);
          console.log(this.token);
    });
  }

  ngOnInit(): void {
  }

}
