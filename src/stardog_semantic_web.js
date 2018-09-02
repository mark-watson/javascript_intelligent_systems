// @flow

var stardog = require("stardog");

var i, conn = new stardog.Connection();

conn.setEndpoint("http://localhost:5820/");
conn.setCredentials("admin", "admin");

conn.query({database: "sample",
  query: "select distinct * where { ?s ?p ?o }",
  limit: 10,
  offset: 0},
  function (data) {
  //console.log(data.results.bindings);
  for (i=0; i<data.results.bindings.length; i++) {
    console.log(data.results.bindings[i]['s']['value'] + "\n  " +
      data.results.bindings[i]['p']['value'] + "\n  " +
      data.results.bindings[i]['o']['value'] + ".");
  }
});

