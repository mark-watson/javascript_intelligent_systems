const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jsbook');

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function callback () {
  console.log("Connection opened to MongoDB");
  const articleSchema = mongoose.Schema({
    title: String,
    url: String,
    content: String});
  const Article = mongoose.model('Article', articleSchema);
  Article.find(function (error, articles) {
    if (error) {console.log("Error: " + error);}
    console.log("All articles:");
    for (let i= 0; i<articles.length; i++) {
      console.log(articles[i]['title']);
      console.log("  " + articles[i]['url']);
      console.log("  " + articles[i]['content']);
    }
  });
  Article.find({title: /^Fishing/}, function (error, articles) {
    if (error) {console.log("Error: " + error);}
    console.log("All articles starting with 'Fishing':");
    console.log(articles)});
});
