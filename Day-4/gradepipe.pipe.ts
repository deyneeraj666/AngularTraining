import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradepipe'
})
export class GradepipePipe implements PipeTransform {

  transform(x:number): string {
   if(x==1)
      return "Outstanding";
    else if(x==2)
      return "Excellent";
      else if(x==3)
      return "Good";
      else 
      return "Average";
  }

}
