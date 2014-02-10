/**
 * Copyright 2013 Mark Watson. All rights reserved.
 * This code may be used under the AGPL version 3 license.
 * This notice must remain in this file and derived files.
 */

/*jslint node: true */



//   From github readme for the Natural project:

var natural = require('natural'),
  tokenizer = new natural.WordTokenizer();
console.log(tokenizer.tokenize("your dog has flees."));

console.log(natural.JaroWinklerDistance("dixon","dicksonx"));
console.log(natural.JaroWinklerDistance('not', 'same'));

console.log(natural.LevenshteinDistance("ones","onez"));
console.log(natural.LevenshteinDistance('one', 'one'));

console.log(natural.PorterStemmer.stem("words"));

natural.PorterStemmer.attach();
console.log("i am waking up to the sounds of chainsaws".tokenizeAndStem());
console.log("chainsaws".stem());

var classifier = new natural.BayesClassifier();

classifier.addDocument('i am long qqqq', 'buy');
classifier.addDocument('short gold', 'sell');
classifier.addDocument('sell gold', 'sell');

classifier.train();

console.log(classifier.classify('i am short silver'));
console.log(classifier.classify('i am long copper'));

var NGrams = natural.NGrams;

console.log(NGrams.bigrams('some words here'));
console.log(NGrams.trigrams('some other words here'));

var TfIdf = natural.TfIdf,
  tfidf = new TfIdf();

tfidf.addDocument('this document is about node.');
tfidf.addDocument('this document is about ruby.');
tfidf.addDocument('this document is about ruby and node.');
tfidf.addDocument('this document is about node. it has node examples');

console.log('node --------------------------------');
tfidf.tfidfs('node', function(i, measure) {
  console.log('document #' + i + ' is ' + measure);
});

console.log('ruby --------------------------------');
tfidf.tfidfs('ruby', function(i, measure) {
  console.log('document #' + i + ' is ' + measure);
});

var wordnet_data_path = process.env.WORDNET_DATA;
console.log("Wordnet data path: " + wordnet_data_path);
var wordnet = new natural.WordNet(wordnet_data_path);

wordnet.get(4424418, 'n', function(result) {
  console.log('------------------------------------');
  console.log(result.lemma);
  console.log(result.pos);
  console.log(result.gloss);
  console.log(result.synonyms);
});

wordnet.lookup('node', function(results) {
  results.forEach(function(result) {
    console.log('------------------------------------');
    console.log(result.synsetOffset);
    console.log(result.pos);
    console.log(result.lemma);
    console.log(result.synonyms);
    console.log(result.pos);
    console.log(result.gloss);
  });
});
