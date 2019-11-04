const geode = require ("geode");

const geoname_username = process.env.GEONAME_USER;

const geo = new geode(geoname_username, {language: 'en', country : 'US'});

geo.search({name :'Sedona'}, function(err, results){
  console.log(results);
});
