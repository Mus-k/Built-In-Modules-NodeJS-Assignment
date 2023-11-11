const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();


const subscribeHandler = () => {
  console.log('User has subscribed!');
};

// Subscribe to the "subscribe" event
eventEmitter.on('subscribe', subscribeHandler);

eventEmitter.emit('subscribe'); // Output: User has subscribed!

// Remove the event handler
eventEmitter.removeListener('subscribe', subscribeHandler);

// Attempt to call the removed event
eventEmitter.emit('subscribe');