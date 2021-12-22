import { Employee } from "./../Models/Employee";
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sib1-com',
  templateUrl: './sib1-com.component.html',
  styleUrls: ['./sib1-com.component.css']
})
export class Sib1ComComponent implements OnChanges {

  @Input() selected:string="";

    emp:Employee[]=[
      {Eno:1,Ename:"Robert",Ejob:"Manager",Esalary:10000,Edeptno:103},
      {Eno:3,Ename:"Tom",Ejob:"Developer",Esalary:20000,Edeptno:101},
      {Eno:4,Ename:"Adi",Ejob:"Tester",Esalary:14000,Edeptno:102},
      {Eno:2,Ename:"John",Ejob:"Manager",Esalary:12000,Edeptno:104},
    ]
    sortedArray:Employee[]=[];
    eno_Sort()
      {
        this.sortedArray=this.emp.sort(function(a,b){
          if(a.Eno <b.Eno)
            return -1;
          if(a.Eno > b.Eno)
            return 1;
          return 0;
        })
     }
     ename_Sort()
      {
      this.sortedArray=this.emp.sort(function(a,b){
        if(a.Ename.toLowerCase() < b.Ename.toLowerCase())
          return -1;
        if(a.Ename.toLowerCase()> b.Ename.toLowerCase())
          return 1;
        return 0;
      })
    }
    ejob_Sort()
    {
      this.sortedArray=this.emp.sort(function(a,b){
        if(a.Ejob.toLowerCase() < b.Ejob.toLowerCase())
          return -1;
        if(a.Ejob.toLowerCase() > b.Ejob.toLowerCase())
          return 1;
        return 0;
      })
  
    }
    esalary_Sort()
    {
      this.sortedArray=this.emp.sort(function(a,b){
        if(a.Esalary <b.Esalary)
          return -1;
        if(a.Esalary>b.Esalary)
          return 1;
        return 0;
      })
  
    }
    edeptno_Sort()
    {
      this.sortedArray=this.emp.sort(function(a,b){
        if(a.Edeptno <b.Edeptno)
          return -1;
        if(a.Edeptno >b.Edeptno)
          return 1;
        return 0;
      })
    }
  
    ngOnChanges()
     {
      if(this.selected=="Eno")
         this.eno_Sort();
      else if(this.selected=="Ename")
          this.ename_Sort();
      else if(this.selected=="Ejob")
          this.ejob_Sort();
      else if(this.selected=="Esalary")
          this.esalary_Sort();
      else if(this.selected=="Edeptno")
          this.edeptno_Sort();
    }
    
     
}
