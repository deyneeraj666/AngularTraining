import { Product } from './../Models/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  
  public prod_list:Product[]  = [
    {pid : 10, pname : "T-shirt",  price :  100,category:"cloth",qty:10} ,
    {pid : 20, pname : "T-shirt",  price :  100,category:"cloth",qty:11} ,
    {pid : 30, pname : "T-shirt",  price :  100,category:"cloth",qty:12} ,
    {pid : 40, pname : "T-shirt",  price :  100,category:"cloth",qty:13} ,
    {pid : 50, pname : "T-shirt",  price :  100,category:"cloth",qty:14} ,
  ];
  

}
