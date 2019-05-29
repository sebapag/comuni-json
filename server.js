/** */ 
const http = require('http');
var logger = require('./services/jarvisServices/LogService');
var cronoJob = require('./utils/CronoJob');

/** */ 
const hostname = '127.0.0.1';
// const port = 3000;
const port = 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Init the services
logger.initLog();

// Convert data via cron
cronoJob.convertData();
