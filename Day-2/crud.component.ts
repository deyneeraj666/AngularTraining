import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  p_id:number=0;
  p_name:string="";
  p_price:number=0;
  p_category:string="";
  p_quantity:number=0;

  isProdnoDisabled:boolean=false;

  public prodsArray:Product[]  = [];


      getProds()
      {
        this.prodsArray =
        [
          {pid : 10, pname : "Laptop",  price :  40000 , category:"Electronics",qty:8} ,
          {pid : 20, pname : "Chairs",  price :  1000 , category:"Furnitures",qty:9} ,
          {pid : 30, pname : "Fans",  price :  899 , category:"Electronics",qty:1} ,
          {pid : 40, pname : "Mobiles",  price :  10000 , category:"Electronics",qty:4} ,
          {pid : 50, pname : "T-Shirt",  price :  100 , category:"Fashion",qty:10} ,  
        ];

      }


      addProds()
      {
          let prodObj:Product = new Product();
          prodObj.pid = this.p_id;
          if(this.toFindDuplicates(prodObj.pid))
          {
            
            prodObj.pname = this.p_name;
            prodObj.price = this.p_price;
            prodObj.category=this.p_category
            prodObj.qty =this.p_quantity
            this.clearFields();
            this.prodsArray.push(prodObj);
          }
          else
          {
            alert("Duplicate ID. Please try with differenet product id!");
            this.clearFields();
          }
          
      }

      deleteProds(pid_delete:number)
      {
        let index:number = this.prodsArray.findIndex(x => x.pid == pid_delete );
        this.prodsArray.splice(index, 1);
      }

      selectProds(pid_select:number)
      {
         let prodObj:any = this.prodsArray.find(x => x.pid == pid_select  );
         this.p_id=prodObj.pid;
         this.p_name=prodObj.pname;
         this.p_price=prodObj.price;
         this.p_category=prodObj.category
        this.p_quantity=prodObj.qty;
        this.isProdnoDisabled = true;
      }

      updateProds()
      {
        let index:number = this.prodsArray.findIndex(x => x.pid == this.p_id );
        this.prodsArray[index].pname = this.p_name;
        this.prodsArray[index].price = this.p_price;
        this.prodsArray[index].category = this.p_category;
        this.prodsArray[index].qty = this.p_quantity;
        this.clearFields();
      }


      clearFields()
      {
          this.isProdnoDisabled = false;
          this.p_id=0;
          this.p_name="";
          this.p_price=0;
          this.p_category="";
          this.p_quantity=0;
      }

    toFindDuplicates(x:number):boolean
    {
        for (let i = 0; i < this.prodsArray.length; i++)
        {
           if (this.prodsArray[i].pid == x)
            {
              return  false;
              break;
            }
        }
        return true;
     }
  }
