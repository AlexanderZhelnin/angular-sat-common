import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { autoSave, autoSaveClear } from 'sat-common';

interface User
{
  firstName?: string;
  secondName?: string;
  age?: number;
}

const key = 'save1';
const keyS = new Subject<string>();

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit
{
  formBuilder = inject(FormBuilder);

  @autoSave(keyS)
  formGroup = this.formBuilder.group<User>({
    firstName: undefined,
    secondName: undefined,
    age: undefined
  });

  constructor() { }

  ngOnInit(): void
  {
    setTimeout(() => keyS.next('save1'), 1000);
  }

  onSubmit(): void
  {
    autoSaveClear(key);
  }

  onCancel()
  {
    this.formGroup.setValue({
      firstName: null,
      secondName: null,
      age: null
    })
    autoSaveClear(key);
  }
}
