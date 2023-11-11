const fs = require('fs');

// Read content from nodejs_architecture.txt
fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Print the content to the console
  console.log('Content of nodejs_architecture.txt:\n', data);
});


// question 4
// Additional advantages of Node.js
const additionalAdvantages = `
Additional Advantages of Node.js:

1. Single-threaded, non-blocking I/O: Node.js is designed to be single-threaded and uses an event-driven, non-blocking I/O model, making it efficient for handling concurrent operations.

2. Large ecosystem: Node.js has a rich ecosystem of modules and packages available through npm (Node Package Manager), which facilitates easy integration of third-party libraries.

3. Fast execution: The V8 JavaScript engine used by Node.js is known for its high-performance, making Node.js suitable for building fast and scalable applications.
`;

// Append additional advantages to nodejs_architecture.txt
fs.appendFile('nodejs_architecture.txt', additionalAdvantages, (err) => {
  if (err) {
    console.error('Error appending to the file:', err);
    return;
  }

  console.log('Additional advantages appended to nodejs_architecture.txt');
  
  // Read and print the updated content
  fs.readFile('nodejs_architecture.txt', 'utf8', (readErr, data) => {
    if (readErr) {
      console.error('Error reading the file:', readErr);
      return;
    }
    
    console.log('Updated content of nodejs_architecture.txt:\n', data);
  });
});

// question 5
// Deleting nodejs_architecture.txt
console.log("question 5");
fs.unlink('nodejs_architecture.txt', (err) => {
    if (err) {
      console.error('Error deleting the file:', err);
      return;
    }
  
    console.log('File Deleted Successfully');
  });
