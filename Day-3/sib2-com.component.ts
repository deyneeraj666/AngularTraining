import { Component, OnInit, EventEmitter ,Output} from "@angular/core";

@Component({
  selector: 'app-sib2-com',
  templateUrl: './sib2-com.component.html',
  styleUrls: ['./sib2-com.component.css']
})
export class Sib2ComComponent  
{
 public option:string=""
 @Output() selected_sort = new EventEmitter<string>();

  sorted()
  {
    //alert(this.option);
    this.selected_sort.emit(this.option);
  }

}
