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
export class Ad1Directive implements IAdDirective
{
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: '[ad-host2]',
})
export class Ad2Directive implements IAdDirective
{
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: '[ad-host3]',
})
export class Ad3Directive implements IAdDirective
{
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: '[ad-host4]',
})
export class Ad4Directive implements IAdDirective
{
  constructor(public viewContainerRef: ViewContainerRef) { }
}

export interface IAdDirective
{
  viewContainerRef: ViewContainerRef;
}
