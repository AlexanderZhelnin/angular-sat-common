import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'Take' })
export class TakePipe implements PipeTransform
{
  constructor() { }
  transform(array: any[], count: number)
  {
    let result: any[] = [];

    for (let i = 0; i < array.length && i < count; i++)result.push(array[i]);
    return result;
  }
} 
