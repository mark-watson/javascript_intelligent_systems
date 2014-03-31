var request = require("request");
var jsdom = require("jsdom");
var htmlparser = require("htmlparser");
var sys = require("sys");

function pp(depth, dom) {
  var i;
  console.log("                ".substr(0, depth) +
              "name: " + dom["name"] +
              " data: " + dom["data"]);
  if (dom["children"] != undefined) {
    for (i=0; i<dom["children"].length; i++) {
      pp(depth + 1, dom["children"][i]);
    }
  }
}

request({
  uri: "http://markwatson.com"
}, function(error, response, body) {

  // use a regular expression to remove HTML tags:
  var regex = /<.*?\>/g;
  console.log(body.replace(regex, ""));

  // use the jsdom module:
  jsdom.env(
    body,
    ["http://code.jquery.com/jquery.js"],
    function (errors, window) {
      console.log("contents of title:", window.$("title").text());
      console.log("contents of h2:", window.$("h2").text());
      console.log("contents of h4:", window.$("h4").text());
      console.log("contents of li:", window.$("li").text());
      console.log("contents of p:", window.$("p").text());
    }
  );

  // use the htmlparser module:
  var handler = new htmlparser.DefaultHandler();
  var k, parser = new htmlparser.Parser(handler);
  parser.parseComplete(body);
  sys.puts(sys.inspect(handler.dom, false, null));
  for (k=0; k<handler.dom.length; k++) {
    pp(0, handler.dom[k]);
  }
});
