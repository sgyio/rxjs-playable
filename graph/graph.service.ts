import { injectable } from "inversify";

import { IGraphService } from "./graph.service.interface";

declare const acgraph;

@injectable()
export class Graph implements IGraphService {
  private stage: any;

  constructor() {
    this.stage = acgraph.create('stage-container');
  }

  public circle(x: number, y: number, radius: number): void {
    this.stage.circle(x, y, radius);
  }

  public line(x1: number, y1: number, x2: number, y2: number): void {
    this.stage
      .path()
      .moveTo(x1, y1)
      .lineTo(x2, y2)
      .close();
  }
}
