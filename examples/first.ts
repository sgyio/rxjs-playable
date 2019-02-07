import { fromEvent, ReplaySubject, Subscription, interval } from 'rxjs';
import { first } from 'rxjs/operators';

import { Elements } from '../utils';
import { IPlayableExample } from '../interfaces';

export class FirstExample implements IPlayableExample {
  private sourceClicks1$ = fromEvent(Elements.Button1, 'click');
  private sourceClicks2$ = fromEvent(Elements.Button2, 'click');

  private sub1: Subscription;
  private sub2: Subscription;

  public play() {
    const source = interval(1000);

    source.subscribe(val => console.log(val));

    this.sub1 = this.sourceClicks1$.subscribe(event => {
      this.sub2 = source.pipe(first()).subscribe(val => {
        console.log('click sub', val);
      });
    });

    this.sourceClicks2$.subscribe(() => {
      console.log('sub1 closed?', this.sub1.closed);
      console.log('sub2 closed?', this.sub2.closed);
    });
  }
}
