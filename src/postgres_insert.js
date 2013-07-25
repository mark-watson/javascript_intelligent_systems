/**
 * Copyright 2013 Mark Watson. All rights reserved.
 * This code may be used under the AGPL version 3 license.
 * This notice must remain in this file and derived files.
 */

/*jslint node: true */

var i,
  pg = require('pg'),
  conString = "postgres://markw@localhost/news",
  client = new pg.Client(conString);

// example 2: adding data, querying new data, deleting data:

client.connect(function (err) {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
  client.query("INSERT INTO article (uri, title, text) values ('http://test.com', 'title zombies', 'zombies are coming')", function (err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log(result);

    client.end();
  });
});


// example 3: hierarchical JSON data:

