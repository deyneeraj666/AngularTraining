import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangepipe'
})
export class RangepipePipe implements PipeTransform {

  transform(inputarray:any[], min:number,max:number): any[]
  {
    let outputarray:any[] = [];
    if(min != 0 && max != 0)
    {
      outputarray=inputarray.filter(item => item.salary >= min && item.salary <= max)
    }
    
    
    return outputarray;
  }

}
