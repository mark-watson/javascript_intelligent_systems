/**
 * Copyright 2013 Mark Watson. All rights reserved.
 * This code may be used under the AGPL version 3 license.
 * This notice must remain in this file and derived files.
 */

// This file contains the example code for the Chapter on the Seantic Web

var stardog = require("stardog");
var conn = new stardog.Connection();
conn.setEndpoint("http://localhost:5820/");
conn.setCredentials("admin", "admin");
conn.query("news", "select distinct * where { ?s ?p ?o } limit 5", null, 5, 0, function (data) {
    console.log(data.results.bindings);
})
