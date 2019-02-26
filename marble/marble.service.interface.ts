import { Observable } from "rxjs";

export interface IMarbleService {
  addSourceTimeline<T>(name: string, observable: Observable<T>): void;
  start(): void;
}