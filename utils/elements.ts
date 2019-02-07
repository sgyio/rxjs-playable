import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import $ from 'jquery';

export class Elements {
  public static Button1 = $('#button1');
  public static Button2 = $('#button2');
  public static Checkbox = $('#chk-is-logged-in');
  public static UnsubscribeButton = $('#unsubscribeButton');

  public static ClicksCounter1 = 0;
  public static ClicksCounter2 = 0;

  public static SourceClicks1$ = fromEvent(Elements.Button1, 'click').pipe(
    map(() => `button1 - ${Elements.ClicksCounter1++}`)
  );

  public static SourceClicks2$ = fromEvent(Elements.Button2, 'click').pipe(
    map(() => `button2 - ${Elements.ClicksCounter2++}`)
  );

  public static IsLoggedIn = () => Elements.Checkbox.is(':checked');
}
