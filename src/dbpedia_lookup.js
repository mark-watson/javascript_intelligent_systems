var request = require("request");
 
var query = "New+York";

request({
  headers: {
    'Accept': 'application/json'
  },
  uri: "http://lookup.dbpedia.org/api/search.asmx/KeywordSearch?QueryString=" + query,
}, function(error, response, body) {
  console.log(body);
});
