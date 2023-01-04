import getDebugger from 'debug';

const debug = getDebugger('vidly:general');
const dbDebug = getDebugger('vidly:db');
const startupDebug = getDebugger('vidly:startup');

export { debug, dbDebug, startupDebug };
