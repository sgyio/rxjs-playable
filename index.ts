// https://docs.anychart.com/Graphics/Overview

import { FirstExample } from './examples';
import { IPlayableExample } from './interfaces';

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
