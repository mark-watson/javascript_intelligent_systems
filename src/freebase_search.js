var request = require("request");

var query = "Mark Louis Watson";

var google_api_key = process.env.GOOGLE_API_KEY;
console.log(google_api_key);

var URL = "https://www.googleapis.com/freebase/v1/search";

var params = [
    { 'query': query,
      'key': google_api_key}
];
var url_str2 = URL + "?" + encodeURIComponent(JSON.stringify(params));
var url_str = URL + "?query=" + encodeURIComponent(query) + "&key=" + google_api_key; // + encodeURIComponent(JSON.stringify(params));
console.log(url_str);

request({
    uri: url_str
}, function (error, response, body) {
    console.log(body);
});

