#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (data) {
  var i, lines = data.split("\n");
  for (i=0; i<lines.length; i++) {
    var line = lines[i];
    var tokens = line.split("\t");
    //console.error("* tokens: " + tokens);
    var wikipedia_article_title = tokens[0]; // unused in this example
    var json_data = JSON.parse(tokens[1]);
    var i, people = json_data["Person"];
    //console.error("* people: " + people);
    if (people != null) {
      for (i=0; i<people.length; i++) {
        console.log(people[i] + "\t" + 1);
        console.error(people[i] + "\t" + 1);
      }
    }
  }
});
