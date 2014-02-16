var SparqlClient = require('sparql-client');
var endpoint = 'http://dbpedia.org/sparql';
var i, result_array;

var query = "SELECT ?s WHERE { ?s  ?p <http://dbpedia.org/resource/London>. FILTER(?p = <http://dbpedia.org/ontology/museum>) } LIMIT 500";
var client = new SparqlClient(endpoint);

client.query(query).execute(function(error, results) {
  result_array = results["results"]["bindings"];
  for (i=0; i<result_array.length; i++) {
    console.log(result_array[i]["s"]);
  }});

