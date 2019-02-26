import { fromEvent, Observable } from 'rxjs';
import $ from 'jquery';

import { IElementsService } from './elements.service.interface';

export class ElementsService implements IElementsService {
  private button1 = $('#button1');
  private button2 = $('#button2');

  public getButton1Observable(): Observable<{}> {
    return fromEvent(this.button1, 'click');
  }

  public getButton2Observable(): Observable<{}> {
    return fromEvent(this.button2, 'click');
  }
}
