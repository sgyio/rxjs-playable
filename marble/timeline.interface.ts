import { Observable } from 'rxjs';

import {IEvent} from './event.interface';

export interface ITimeline<T> {
  name: string;
  observable: Observable<T>;
  events?: IEvent[];
  type: TimelineType;
}


export enum TimelineType {
  Source,
  Result
}
