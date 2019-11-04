const neo4j = require('neo4j-js');

neo4j.connect('http://localhost:7474/db/data/', function (error, graph) {
  if (error) {
    throw error;
  }

  graph.query("CREATE (n:Person {name:'Mark Watson'})-[r:WROTE]->(a:Article {title: 'Fishing Season Opens', text: 'Fishing season opened today.'})",
    function (err, results) {
      if (err) { console.log("Error: " + err); }
    });
});

