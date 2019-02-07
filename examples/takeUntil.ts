import { fromEvent, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Elements } from '../utils';
import { IPlayableExample } from '../interfaces';

export class TakeUntilExample implements IPlayableExample {
  private sourceClicks1$ = fromEvent(Elements.Button1, 'click');
  private sourceClicks2$ = fromEvent(Elements.Button2, 'click');
  private unsubscribe$ = new ReplaySubject<boolean>(1);

  public play() {
    const sub1 = this.sourceClicks1$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(event => {
        console.log('event', event);
      });

    this.sourceClicks2$.subscribe(() => {
      console.log('sub1', sub1.closed);
    });

    const unsubscribeButtonClicks$ = fromEvent(
      Elements.UnsubscribeButton,
      'click'
    );
    unsubscribeButtonClicks$.subscribe(() => {
      this.unsubscribe$.next(true);
      this.unsubscribe$.complete();
    });
  }
}
