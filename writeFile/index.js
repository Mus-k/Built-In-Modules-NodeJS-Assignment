const fs = require('fs');

// Information about Node.js architecture
const nodejsArchitectureInfo = `
Node.js Architecture:
Node.js is built on the V8 JavaScript runtime and follows an event-driven, non-blocking I/O model, making it lightweight and efficient for building scalable network applications.
`;

// Write information to nodejs_architecture.txt
fs.writeFileSync('nodejs_architecture.txt', nodejsArchitectureInfo, (err) => {
  if (err) throw err;
  console.log('Information about Node.js architecture has been written to nodejs_architecture.txt');
});

