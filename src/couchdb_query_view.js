var cradle = require('cradle');
var db = new(cradle.Connection)().database('news');

//db.view('titles/all', function (error, doc) {
db.view('titles/fishing', function (error, doc) {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("Document title: " + doc);
  }
});
