import { combineLatest, withLatestFrom } from 'rxjs/operators';

import { Elements } from '../utils';
import { IPlayableExample } from '../interfaces';

export class CombinationExample implements IPlayableExample {
  public play() {
    Elements.SourceClicks1$.pipe(
      combineLatest(Elements.SourceClicks2$)
    ).subscribe(value => {
      console.log('combineLatest', value);
    });

    Elements.SourceClicks1$.pipe(
      withLatestFrom(Elements.SourceClicks2$)
    ).subscribe(value => {
      console.log('withLatestFrom', value);
    });

    Elements.SourceClicks2$.pipe(
      combineLatest(Elements.SourceClicks1$)
    ).subscribe(value => {
      console.log('combineLatest', value);
    });
  }
}
