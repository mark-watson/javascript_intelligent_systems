var request = require("request");

var URL = "https://www.googleapis.com/freebase/v1/mqlread";
var json = "[{     \"/people/person/date_of_birth\":null,     \"/people/person/gender\":null,     \"/people/person/place_of_birth\":null,     \"/people/person/profession\":\"biologist\", \"name\":null   }] ";
var url_str = URL + "?query=" + encodeURIComponent(json);

request({
  uri: url_str,
}, function(error, response, body) {
  console.log(body);
});
