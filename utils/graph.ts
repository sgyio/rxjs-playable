declare const acgraph;

export class Graph {
  private stage: any;

  constructor() {
    this.stage = acgraph.create('stage-container');
  }

  public circle(x: number, y: number, radius: number) {
    this.stage.circle(x, y, radius);
  }

  public line(x1, y1, x2, y2) {
    this.stage
      .path()
      .moveTo(x1, y1)
      .lineTo(x2, y2)
      .close();
  }
}
