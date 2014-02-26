/*jslint node: true */

var fs = require('fs');  // for reading text files

// Sample data for these examples (coerced to strings):

var economy = ' ' + fs.readFileSync('data/texts/economy.txt');
var politics = ' ' + fs.readFileSync('data/texts/politics.txt');
var sports = ' ' + fs.readFileSync('data/texts/sports.txt');

//   Derived from the github readme for the Natural project:

var natural = require('natural'),
  tokenizer = new natural.WordTokenizer();

console.log("\n-- Tokenized sample text in politics.txt:");
console.log(tokenizer.tokenize(politics));

console.log("\n-- Use Porter Stemmer on a single word:");
console.log(natural.PorterStemmer.stem("dogs"));

natural.PorterStemmer.attach();  // add methods to string

console.log("\n-- Use Porter Stemmer text in file sports.txt:");
console.log(sports.tokenizeAndStem());

var classifier = new natural.BayesClassifier();

classifier.addDocument(' '+economy, 'economy');
classifier.addDocument(' '+politics, 'politics');
classifier.addDocument(' '+sports, 'sports');
classifier.train();

console.log("\n-- Bayesian classifier test results:");

console.log(classifier.classify('The President and Congress went on vacation.'));
console.log(classifier.classify('Tax rates might be effected by quantitative easing.'));
console.log(classifier.classify('I like baseball more than football.'));

var NGrams = natural.NGrams;

console.log("\n-- 2grams in text from file sports.txt:");
console.log(NGrams.bigrams(sports));
console.log("\n-- 2grams in text from file sports.txt:");
console.log(NGrams.trigrams(sports));

var TfIdf = natural.TfIdf,
  tfidf = new TfIdf();

tfidf.addDocument(' '+economy, 'economy');
tfidf.addDocument(' '+politics, 'politics');
tfidf.addDocument(' '+sports, 'sports');

console.log('\n-- tfidf for word "economy" in three test documents:');
tfidf.tfidfs('economy', function(i, measure) {
  console.log('document #' + i + ' is ' + measure);
});

console.log('\n-- tfidf for word "politics" in three test documents:');
console.log('politics --------------------------------');
tfidf.tfidfs('politics', function(i, measure) {
  console.log('document #' + i + ' is ' + measure);
});

console.log('\n-- tfidf for word "sports" in three test documents:');
console.log('sports --------------------------------');
tfidf.tfidfs('sports', function(i, measure) {
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
