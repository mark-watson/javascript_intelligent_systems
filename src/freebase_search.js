var request = require("request");

var query = "Mark Louis Watson";

var google_api_key = process.env.GOOGLE_API_KEY;
//console.log(google_api_key);

var URL = "https://www.googleapis.com/freebase/v1/search";

var url_str = URL + "?query=" + encodeURIComponent(query) + "&key=" + google_api_key;
console.log(url_str);

request({
    uri: url_str
}, function (error, response, body) {
  var result = JSON.parse(body);
  console.log(result);
});

