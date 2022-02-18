import { NgModule } from '@angular/core';
import { SafeUrlPipe } from './safeUrlPipe';
import { CommonModule } from '@angular/common';
import { SafeStylePipe } from './safeStylePipe';
import { SafeHtmlPipe } from './safeHtmlPipe';
import { TakePipe } from './takePipe';
import { SkipPipe } from './skipPipe';

@NgModule({
  declarations: [
    SafeUrlPipe,
    SafeStylePipe,
    SafeHtmlPipe,
    TakePipe,
    SkipPipe,
  ],
  entryComponents: [

  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafeUrlPipe,
    SafeStylePipe,
    SafeHtmlPipe,
    TakePipe,
    SkipPipe,
  ],
  providers: [],
})
export class PipesModule
{
  constructor() {  }
}
