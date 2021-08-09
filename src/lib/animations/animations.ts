import { trigger, state, transition, style, animate, group } from "@angular/animations";

export const animatems: number = 200;

//export const HideOpacity = trigger('HideOpacity', [
//  state('true', style({ opacity: '1', 'height': '1.5rem' })),
//  state('false', style({ opacity: '0', 'height': '0' })),
//  transition('0 <=> 1', animate(`${animatems}ms ease`))
//]);

//export const slideUpDown = trigger('slideUpDown', [
//  state('true', style({ 'max-height': '*', opacity: 1 })),
//  state('false', style({ 'max-height': '0px', opacity: 0 })),
//  transition(':enter', animate('300ms ease-in-out')),
//  transition('* => *', animate('300ms ease-in-out')),
//]);


export const Show = trigger('Show',
  [
    transition(':enter', [style({ opacity: 0 }), animate(`${animatems}ms ease-out`)]),
    transition(':leave', [style({ opacity: 1 }), animate(`${animatems}ms ease-out`, style({ opacity: 0 }))])
  ]);


export const Visibility = trigger('Visibility',
  [
    state('true', style({ opacity: 1, height: '25px' })),
    state('false', style({ opacity: 0, height: 0 })),

    transition('* => true', [style({ opacity: 0, height: 0 }), animate(`${animatems}ms ease-out`)]),
    transition('true => false',
      [
        style({ opacity: 1, height: '25px' }),
        animate(`${animatems}ms ease-out`, style({ opacity: 0, height: 0 })),
        //group([
        //  animate(`500ms ease-out`, style({ opacity: 0 })),
        //  animate(`${animatems}ms ease-out`, style({ height: 0 }))
        //])
      ])
  ]);

