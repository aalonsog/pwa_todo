'use strict';

const express = require('express');
var https = require('https');
var fs = require('fs');

/**
 * Starts the Express server.
 *
 * @return {ExpressServer} instance of the Express server.
 */
function startServer() {
  const app = express();

  // Logging for each request
  app.use((req, resp, next) => {
    const now = new Date();
    const time = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;
    const path = `"${req.method} ${req.path}"`;
    const m = `${req.ip} - ${time} - ${path}`;
    // eslint-disable-next-line no-console
    console.log(m);
    next();
  });

  // Handle requests for static files
  app.use(express.static('public'));


  var options = {
    key: fs.readFileSync('certs/pwa-key.pem'),
    cert: fs.readFileSync('certs/pwa-cert.pem')
  };

  // Start the server
  return https.createServer(options, app).listen(443);
}

startServer();