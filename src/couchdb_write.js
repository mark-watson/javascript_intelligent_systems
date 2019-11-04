const cradle = require('cradle');
const db = new(cradle.Connection)().database('news');

db.save('article1', {
  title: 'Fishing Season Opens Today',
  url: 'http://test.com/fishing',
  content: 'Fishing season starts today. Enjoy!'
}, function (error, result) {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("Result: " + result);
  }
});
