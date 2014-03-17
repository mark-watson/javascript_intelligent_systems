var solr = require('solr-client');

// assume server is running on localhost:
var i, j, client = solr.createClient();

var query2 = client.createQuery()
  .q({name: 'radeon'})
  .start(0)
  .rows(10);

client.search(query2, function (error, result) {
  if (error) {
    console.log(error);
  } else {
    var response = result["response"];
    var docs = response["docs"];
    for (i = 0; i < docs.length; i++) {
      console.log("Name: " + docs[i].name);
      if (docs[i].cat) {
        for (j = 0; j < docs[i].cat.length; j++) {
          console.log("  category: " + docs[i].cat[j]);
        }
      }
      if (docs[i].features) {
        for (j = 0; j < docs[i].features.length; j++) {
          console.log("  feature: " + docs[i].features[j]);
        }
      }
    }
  }
});
