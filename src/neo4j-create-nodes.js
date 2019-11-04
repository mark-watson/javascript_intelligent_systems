const neo4j = require('neo4j-js');

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
          node2.createRelationshipFrom(node1.id, 'author',
            { date: '2014/02/27' },
            function (error33, node22) {
              console.log("Creating relationship. error33=" + error33 + ", node22=" + node22);
            });
          graph.createNode({uri: 'http://knowledgebooks.com',
              owner: node1.name,
              title: 'KnowledgeBooks.com web site',
              text: "Mark's collection of resources for AI and semantic web"},
            function (error4, node3) {
              if (error4) {
                console.log("Error: " + error4);
              }
              node3.createRelationshipFrom(node1.id, 'owns',
                { },
                function (error34, node23) {
                  console.log("Creating relationship. error34=" + error34 + ", node32=" + node23);
                });

            });
        });
    });
});
