import { Observable, of, merge } from 'rxjs';
import { injectable } from 'inversify';

import { ITimeline, TimelineType } from './timeline.interface';
import { IMarbleService } from './marble.service.interface';

@injectable()
export class MarbleService implements IMarbleService {
  private timelines: ITimeline<any>[] = [];

  // private observables: Observable<any>[];

  public setup;

  public addSourceTimeline<T>(name: string, observable: Observable<T>): void {
    this.timelines.push({ name, observable, type: TimelineType.Source });
  }

  public start(): void {
    console.log('marble.start()');
    merge(this.timelines.map(timeline => timeline.observable)).subscribe(
      event => console.log('marble', event),
    );
  }
}
