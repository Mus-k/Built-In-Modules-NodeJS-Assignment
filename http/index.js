const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send the message as the response
  res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
});

// Set the server to listen on port 3000 (you can use any available port)
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
