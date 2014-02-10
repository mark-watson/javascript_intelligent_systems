var request = require("request");

var google_api_key = process.env.GOOGLE_API_KEY;

var URL = "https://www.googleapis.com/freebase/v1/mqlread";
var json_query = [
    { "/people/person/date_of_birth": null,
      "/people/person/gender": null,
      "/people/person/place_of_birth": null,
      "/people/person/profession": "biologist",
      "name": null   }
];
var url_str = URL + "?query=" + encodeURIComponent(JSON.stringify(json_query)) + "&key=" + google_api_key;

request({
    uri: url_str
}, function (error, response, body) {
    var result = JSON.parse(body);
    console.log(result);
});
