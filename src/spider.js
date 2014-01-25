var request = require("request");
 
request({
  uri: "http://markwatson.com"
}, function(error, response, body) {
  // use a regular expression to remove HTML tags:
  var regex = /<.*?\>/g;
  console.log(body.replace(regex, ""));
});
