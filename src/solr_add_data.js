var solr = require('solr-client');

// assume server is running on localhost:
var client = solr.createClient();
client.autoCommit = true;

// Add a new document
client.add({ id: 12345, name: 'Radeon Imperial Star Fighter', cat: [], features: [] },function(error, result){
  if(error){
    console.log(error);
  }else{
    console.log('Solr response:' + result);
  }
});
