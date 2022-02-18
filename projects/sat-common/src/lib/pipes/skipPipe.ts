import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'Skip' })
export class SkipPipe implements PipeTransform
{
  constructor() { }
  transform(array: any[], count: number)
  {
    let result: any[] = [];

    for (let i = count; i < array.length; i++)result.push(array[i]);
    return result;
  }
} 
