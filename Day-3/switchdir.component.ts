import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdir',
  templateUrl: './switchdir.component.html',
  styleUrls: ['./switchdir.component.css']
})
export class SwitchdirComponent {
  
  public mode:string = "List";
  public  students:any[] = [
     {sname  :  "Scott", course : "Angular"},
     {sname  :  "Smith", course : "HTML5"},
     {sname  :  "Smith", course : "React JS"},
     {sname  :  "James", course : "Angular"},
     {sname  :  "Adam", course : "Java Script"},
     {sname  :  "Sathya", course : "React JS"},
     {sname  :  "Mark", course : "Angular"},
     {sname  :  "Peter", course : "HTML5"},
     {sname  :  "Maneesh", course : "React JS"},
     {sname  :  "Ramesh", course : "Angular"},
     {sname  :  "Vinush", course : "Java Script"},
     {sname  :  "Haneesh", course : "React JS"}
      ];

      selection(n:number)
      {
        if(n==1)
          this.mode="List";
        else if(n==2)
           this.mode="Table";
        else if(n==3)
           this.mode="Card";
        else
           this.mode="Other"
          
      }

}
