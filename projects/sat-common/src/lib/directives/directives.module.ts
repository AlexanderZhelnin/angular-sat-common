import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdDirective, Ad1Directive, Ad2Directive, Ad3Directive, Ad4Directive } from './ad-host';

@NgModule({
  declarations: [
    AdDirective,
    Ad1Directive,
    Ad2Directive,
    Ad3Directive,
    Ad4Directive,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AdDirective,
    Ad1Directive,
    Ad2Directive,
    Ad3Directive,
    Ad4Directive,
  ],
})
export class DirectivesModule
{
}
