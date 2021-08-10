import { trigger, state, transition, style, animate, group } from '@angular/animations';

export const ANIMATE_MS = 200;

export const SHOW = trigger('Show',
  [
    transition(':enter', [style({ opacity: 0 }), animate(`${ANIMATE_MS}ms ease-out`)]),
    transition(':leave', [style({ opacity: 1 }), animate(`${ANIMATE_MS}ms ease-out`, style({ opacity: 0 }))])
  ]);


export const VISIBILITY = trigger('Visibility',
  [
    state('true', style({ opacity: 1, height: '25px' })),
    state('false', style({ opacity: 0, height: 0 })),

    transition('* => true', [style({ opacity: 0, height: 0 }), animate(`${ANIMATE_MS}ms ease-out`)]),
    transition('true => false',
      [
        style({ opacity: 1, height: '25px' }),
        animate(`${ANIMATE_MS}ms ease-out`, style({ opacity: 0, height: 0 })),
      ])
  ]);

