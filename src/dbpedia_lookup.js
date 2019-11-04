const request = require("request");

const query = "New+York";

request({
  headers: {
    'Accept': 'application/json'
  },
  uri: "http://lookup.dbpedia.org/api/search.asmx/KeywordSearch?QueryString=" + query,
  timeout: 5000
}, function (error, response, body) {
  var results = JSON.parse(body)['results'], i;
  for (i = 0; i < results.length; i++) {
    console.log(results[i]['uri'] + "\t" + results[i]['label'] + "\t" + results[i]['description']);
  }
  console.log(body);
});
