import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResizeDocumentService
{
  public changed$ = new Subject();
  constructor()
  {
    window.addEventListener('resize', this.onResize);
  }

  private onResize = (): void => { this.changed$.next(true); };
}
