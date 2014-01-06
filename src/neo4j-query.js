/**
 * Copyright 2013 Mark Watson. All rights reserved.
 * This code may be used under the AGPL version 3 license.
 * This notice must remain in this file and derived files.
 */

/*jslint node: true */


var i, node, relationship, neo4j = require('neo4j-js');

neo4j.connect('http://localhost:7474/db/data/', function (error, graph) {
  if (error) {
    throw error;
  }
  // START n=node:node_auto_index(title="Fishing Season Opens")
  graph.query([
    //'START n=node:nodeIndexName(title="Fishing Season Opens")',
    'START n=node(*)',
    'RETURN n'].join('\n'),
    function (err, results) {
      if (err) {
        throw err;
      }
      for (i = 0; i < results.length; i += 1) {
        relationship = results[i].r;
        node = results[i].m;

        // ... do something with the nodes and relationships we just grabbed
      }

      console.log(JSON.stringify(results, null, 5)); // printing may help to visualize the returned structure
    });
});
