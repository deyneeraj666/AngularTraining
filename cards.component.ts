import { Component, OnInit } from '@angular/core';
import { Details } from '../Models/Details';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent  {

 public cards:Details[]=[
   {card_url:"assets/Images/Angular-logo.png",card_name:"Angular",card_desc:"Front-End Dev framework"},
   {card_url:"assets/Images/anroid.png",card_name:"Anroid",card_desc:"Front-End Dev framework"},
   {card_url:"assets/Images/chrome.jfif",card_name:"Chrome",card_desc:"Front-End Dev framework"},
   {card_url:"assets/Images/css.png",card_name:"Css",card_desc:"Front-End Dev framework"},
   {card_url:"assets/Images/html.png",card_name:"Html",card_desc:"Front-End Dev framework"},
   {card_url:"assets/Images/Angular-logo.png",card_name:"Angular",card_desc:"Front-End Dev framework"},
   {card_url:"assets/Images/Angular-logo.png",card_name:"Angular",card_desc:"Front-End Dev framework"},
   {card_url:"assets/Images/Angular-logo.png",card_name:"Angular",card_desc:"Front-End Dev framework"},
  ];

 

}

