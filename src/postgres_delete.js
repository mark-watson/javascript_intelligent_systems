/**
 * Copyright 2013 Mark Watson. All rights reserved.
 * This code may be used under the Apache 2 license.
 * This notice must remain in this file and derived files.
 */

/*jslint node: true */

var i,
  pg = require('pg'),
  conString = "postgres://markw@localhost/news",
  client = new pg.Client(conString);

// example 3: delete data:

client.connect(function (err) {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  client.query("DELETE FROM article WHERE title = 'title zombies'", function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result);

    client.end();
  });
});
