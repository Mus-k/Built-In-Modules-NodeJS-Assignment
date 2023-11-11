const os = require('os');

// Get OS name
const osName = os.platform();

// Get OS release version
const osRelease = os.release();

// Print information to the console
console.log('Operating System:', osName);
console.log('OS Release Version:', osRelease);
