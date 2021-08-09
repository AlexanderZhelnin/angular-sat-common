import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class AdDirective implements IAdDirective
{
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: '[ad-host1]',
})
export class AdDirective1 implements IAdDirective
{
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: '[ad-host2]',
})
export class AdDirective2 implements IAdDirective
{
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: '[ad-host3]',
})
export class AdDirective3 implements IAdDirective
{
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: '[ad-host4]',
})
export class AdDirective4 implements IAdDirective
{
  constructor(public viewContainerRef: ViewContainerRef) { }
}

export interface IAdDirective
{
  viewContainerRef: ViewContainerRef
}
