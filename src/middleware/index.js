import logger from './logger';
import thunk from './thunk';
import delay from './delay';
import promise from './promise';

const middleware = [
    thunk,
    delay,
    promise,
    logger,
];

export default middleware;