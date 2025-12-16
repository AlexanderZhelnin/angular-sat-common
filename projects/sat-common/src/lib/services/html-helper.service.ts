import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HtmlHelperService
{
  constructor(private sanitizer: DomSanitizer) { }

  setContent(e: Element, value: string, safe = true): void
  {
    if (safe)
    {
      e.innerHTML =  value;
      return;
    }
    e.innerHTML =  (this.sanitizer.bypassSecurityTrustHtml(value) as any).changingThisBreaksApplicationSecurity;
  }

  setElement(e: Element, value: string, safe = true): void
  {
    if (safe)
    {
      e.outerHTML =  value;
      return;
    }
    e.outerHTML = (this.sanitizer.bypassSecurityTrustHtml(value) as any).changingThisBreaksApplicationSecurity;
  }
}
