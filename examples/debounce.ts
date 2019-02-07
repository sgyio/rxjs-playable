import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Elements } from '../utils';
import { IPlayableExample } from '../interfaces';

export class DebounceExample implements IPlayableExample {
  private sourceClicks1$ = fromEvent(Elements.Button1, 'click');

  public play() {
    this.sourceClicks1$.pipe(debounceTime(500)).subscribe(event => {
      console.log(event);
    });
  }
}
