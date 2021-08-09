import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ResizeDocumentService
{
  public changed$ = new Subject();
  constructor()
  {
    window.addEventListener("resize", this.onres);
  }

  private onres = (): void => { this.changed$.next(); };
}
