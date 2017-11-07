var http = require('http');
var express = require('express');
var _ = require('lodash');
var path = require('path');

var app = express();
var server = http.createServer(app);

/**
 * Routing
 */
app.get('/sports', (req, res, next) => {
  res.send('sports/');
});
app.get('/sports/:sportId', (req, res, next) => {
  res.send('sports/ '.concat(req.params.sportId));
});
app.get('/sports/:sportId/events/:eventId', (req, res, next) => {
  res.send('/sports/'.concat(req.params.sportId).concat('/events/').concat(req.params.eventId));
});


server.listen(3000, 'localhost', function () {
})
