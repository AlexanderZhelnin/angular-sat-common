import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SvgService
{

  public svg$ = new BehaviorSubject<string[]>([]);

}
