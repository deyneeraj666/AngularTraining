import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customepipe',
  templateUrl: './customepipe.component.html',
  styleUrls: ['./customepipe.component.css']
})
export class CustomepipeComponent {

  stuArray:any[]=[
    {id:1,name:"Robert",grade:1},
    {id:2,name:"Robert",grade:2},
    {id:3,name:"Robert",grade:3},
    {id:4,name:"Robert",grade:4},
    {id:5,name:"Robert",grade:1},
    {id:6,name:"Robert",grade:2},
    {id:7,name:"Robert",grade:3},

   ]

}
