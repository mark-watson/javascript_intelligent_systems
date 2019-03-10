const cradle = require('cradle');
const db = new(cradle.Connection)().database('news');

db.get('article1', function (error, doc) {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("Document: " + doc);
  }
});
