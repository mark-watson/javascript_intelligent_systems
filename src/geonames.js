// @flow

var geode = require ("geode");

var geoname_username = process.env.GEONAME_USER;

var geo = new geode(geoname_username, {language: 'en', country : 'US'});

geo.search({name :'Sedona'}, function(err, results){
  console.log(results);
});


