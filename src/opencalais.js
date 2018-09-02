// @flow

var calais = require ("calais");

var open_calais_api_key = process.env.OPEN_CALAIS_KEY;

var i, calais_client = new calais.Calais(open_calais_api_key);

calais_client.set('content', 'President Obama spoke before Congress about taxes and income inequality.');

calais_client.fetch(function(results) {
  for (i = 0; i < results.length; i += 1) {
    //console.log(results[i]);
    if (results[i]['_type'] && results[i]['name']) {
      console.log(results[i]['_type'] + ": " + results[i]['name']);
    }
  }
});

