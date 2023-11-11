const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('subscribe', (channelName) => {
  console.log(`Thanks for subscribing to ${channelName}!`);
});

eventEmitter.emit('subscribe', 'College Wallah');

