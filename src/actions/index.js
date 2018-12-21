import * as counter from './counter';
import * as todos from './todos';
import * as filter from './filter';

const creators = {...counter, ...todos, ...filter};
export default creators;