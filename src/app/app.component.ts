
import { Component } from '@angular/core';
import { DynamicCodeService } from 'sat-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'angular-sat-common';
  constructor(s_dynamic: DynamicCodeService)
  {

    console.log(s_dynamic.getFunction('return true')());
  }
}
