import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdDirective, AdDirective1, AdDirective2, AdDirective3, AdDirective4 } from './ad-host';

@NgModule({
  declarations: [
    AdDirective,
    AdDirective1,
    AdDirective2,
    AdDirective3,
    AdDirective4,
  ],
  imports: [
    CommonModule,
    FormsModule,


  ],
  exports: [
    AdDirective,
    AdDirective1,
    AdDirective2,
    AdDirective3,
    AdDirective4,
  ],
})
export class DirectivesModule
{
}
