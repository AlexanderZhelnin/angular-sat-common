import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SvgService
{

  public svg$ = new BehaviorSubject<string[]>([]);

}
