const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

// Determine the default maximum number of listeners for an event
const defaultMaxListeners = eventEmitter.getMaxListeners();
console.log('The Default Maximum Number of Listeners are:', defaultMaxListeners);

// Set the maximum number of listeners to 5
eventEmitter.setMaxListeners(5);

// Print the updated maximum number of listeners
const updatedMaxListeners = eventEmitter.getMaxListeners();
console.log('The Updated Maximum Number of Listeners are:', updatedMaxListeners);


