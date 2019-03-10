const SparqlClient = require('sparql-client');
const endpoint = 'http://dbpedia.org/sparql';

var query = "SELECT ?s WHERE { ?s  ?p <http://dbpedia.org/resource/London>. FILTER(?p = <http://dbpedia.org/ontology/museum>) } LIMIT 500";
var client = new SparqlClient(endpoint);

client.query(query).execute(function(error, results) {
  const result_array = results["results"]["bindings"];
  for (let i=0; i<result_array.length; i++) {
    console.log(result_array[i]["s"]);
  }});

