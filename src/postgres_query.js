// @flow

/**
 * Copyright 2013 Mark Watson. All rights reserved.
 * This code may be used under the Apache 2 license.
 * This notice must remain in this file and derived files.
 */

/*jslint node: true */

var i,
  temp,
  pg = require('pg'),
  conString = "postgres://markw@localhost/news",
  client = new pg.Client(conString);

// example 1: simple query:

client.connect(function (err) {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM article', function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result);
    for (i = 0; i < result.rowCount; i += 1) {
      console.log(result.rows[i]);
      temp = result.rows[i]; //.metadata.page;
      console.log("* metadata page = " + temp);
    }
    client.end();
  });
});




