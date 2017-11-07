var http = require('http');
var https = require('https');
var express = require('express');
var _ = require('lodash');
var path = require('path');

let db = null;

function loadDb() {
  return new Promise((resolve, reject) => {
    https.get({
      host: 'www.betvictor.com',
      path: '/en-gb/live/live/list'
    }, (resp) => {
      resp.setEncoding('utf8')

       resp.on('data', function(chunk){
         //do something with chunk
         return resolve(chunk);
       });
    }).on("error", function(e) {
      console.log("Got error: " + e.message);
    });
  })
}


/**
 *  Loads the database if it can.
 *  If it can't it fails early, and it fails hard.
 */
loadDb().
  then((res) => {
    db = Database(res);
    return;
  }).then(() => {

  var app = express();
  var server = http.createServer(app);
  
  
  
  /**
   * Routing
   */
  app.get('/sports', (req, res, next) => {
    res.send(db);
  });
  app.get('/sports/:sportId', (req, res, next) => {
    res.send(db);
  });
  app.get('/sports/:sportId/events/:eventId', (req, res, next) => {
    res.send(db);
  });


  server.listen(3000, 'localhost', function () {
    console.log("Listening on localhost:3000");
  })
})

function Database(data) {
  if (this instanceof Database) {
      this.data = data;
  } else {
    return new Database(data);
  }
}
