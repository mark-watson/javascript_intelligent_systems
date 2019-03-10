const neo4j = require('neo4j-js');

neo4j.connect('http://localhost:7474/db/data/', function (error, graph) {
  if (error) {
    throw error;
  }
  graph.query(
    'MATCH (a)-[r]-(b) RETURN a,b,r LIMIT 25',
    function (err, results) {
      if (err) {
        throw err;
      }
      console.log(JSON.stringify(results, null, 5));
    });
});
