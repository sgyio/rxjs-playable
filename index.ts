// https://docs.anychart.com/Graphics/Overview

// import { FirstExample } from './examples';
// import { IPlayableExample } from './interfaces';
// import { Elements } from './utils/elements';
// import { Marble } from './utils/marble';

import container from './ioc/config';
import Types from './ioc/types';
import { IMarbleService } from './marble/marble.service.interface';

declare const acgraph;

console.clear();

var stage = acgraph.create('stage-container');

var simpleLayer = stage.layer();

simpleLayer
  .path()
  .moveTo(5, 20)
  .lineTo(800, 20)
  .close();

const supLayer = stage.layer();
supLayer.circle(20, 20, 10).fill('#2196F3');

// const marble = new Marble();

// marble.addSourceTimeline<string>('buttonClicks', Elements.SourceClicks1$);

// Elements.SourceClicks1$.subscribe(event => console.log(event));

// marble.start();

const marbleService = container.get<IMarbleService>(Types.MarbleService);

marbleService.start();
