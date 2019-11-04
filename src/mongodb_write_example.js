const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jsbook');

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function callback () {
  console.log("Connection opened to MongoDB");
  var articleSchema = mongoose.Schema({
    title: String,
    url: String,
    content: String});
  const Article = mongoose.model('Article', articleSchema);
  const article1 =
    new Article({title: 'Fishing Season',
                 url: 'http://test.com/fishing',
                 content: 'Fishing season started yesterday.'});
  article1.save(function (err, article) {
    if (err) console.log(err);
    console.log(article);
  });
  const article2 =
    new Article({title: 'Stock Bubble',
      url: 'http://test.com/bubble',
      content: 'The bubble occurred when QE stopped.'});
  article2.save(function (err, article) {
    if (err) console.log(err);
    console.log(article);
  });
  console.log("Done writing to Article documents.");
});
