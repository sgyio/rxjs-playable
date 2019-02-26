import 'reflect-metadata';

import { Container } from 'inversify';

import Types from './types';

// import { IHelloWorldService } from '../services/interfaces/IHelloWorldService';
// import { HelloWorldService } from '../services/helloWorldService';

import { MarbleService } from '../marble/marble.service';
import { IMarbleService } from '../marble/marble.service.interface';

let container = new Container();

container
  .bind<IMarbleService>(Types.MarbleService)
  .to(MarbleService);

export default container;
