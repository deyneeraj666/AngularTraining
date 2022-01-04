import { pipe } from "rxjs";
import {Pipe, PipeTransform} from '@angular/core';
import { GradepipePipe } from './gradepipe.pipe';

describe('GradepipePipe', () => 
{
  let pipe:GradepipePipe;

  beforeEach( () =>
  {
    pipe = new GradepipePipe();
  });

  it('create an instance', () => {
     
    expect(pipe).toBeTruthy();
  });

  it('should return "Outstanding" when input is "1" ', () => {
    const result:string  = pipe.transform(1);
    console.log(result);
    expect(result).toBe("Outstanding");
  });

  it('should return "Excellent" when input is "2" ', () => {
    const result:string  = pipe.transform(2);
    expect(result).toBe("Excellent");
  });

  it('should return "Good" when input is "3" ', () => {
    const result:string  = pipe.transform(3);
    expect(result).toBe("Good");
  });

  it('should return "" when input is "5" ', () => {
    const result:string  = pipe.transform(5);
    expect(result).toBe("");
  });

  it('should return "" when input is "8" ', () => {
    const result:string  = pipe.transform(5);
    expect(result).toBe("");
  });

});
