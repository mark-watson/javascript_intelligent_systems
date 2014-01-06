/**
 * Copyright 2013 Mark Watson. All rights reserved.
 * This code may be used under the AGPL version 3 license.
 * This notice must remain in this file and derived files.
 */

/*jslint node: true */


var neo4j = require('neo4j-js');

neo4j.connect('http://localhost:7474/db/data/', function (error, graph) {
  if (error) {
    throw error;
  }
  graph.createNode({uri: 'http://markwatson.com',
      name: 'Mark Watson'},
    function (error2, node1) {
      console.log('Mark node created');
      graph.createNode({uri: 'http://test/com/fishing.html',
          title: 'Fishing Season Opens',
          text: 'Fishing season opened today.',
          author: node1.id},
        function (error3, node2) {
          if (error3) {
            console.log("Error: " + error3);
          }
          console.log('fishing node created');
        });
    });
});
