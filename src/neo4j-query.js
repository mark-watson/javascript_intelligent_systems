const neo4j = require('neo4j-js');

neo4j.connect('http://localhost:7474/db/data/', function (error, graph) {
  if (error) {
    throw error;
  }
  graph.query([
    'START n=node(*)',
    'RETURN n'].join('\n'),
    function (err, results) {
      if (err) {
        throw err;
      }
      for (let i = 0; i < results.length; i += 1) {
        const relationship = results[i].r;
        const node = results[i].n;
        console.log(node);
      }
      console.log(JSON.stringify(results, null, 5));
    });
});
