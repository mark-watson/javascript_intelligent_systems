const neo4j = require('neo4j-js');

neo4j.connect('http://localhost:7474/db/data/', function (error, graph) {
  if (error) {
    throw error;
  }
  graph.query("MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE n,r",
    function (err, results) {
      if (err) {
        console.log("Error: " + err);
      }
      console.log(JSON.stringify(results, null, 5));
    });
});
