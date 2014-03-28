#!/usr/bin/env node

console.error("Entering reduce1.js...");

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var previous = null;
var count = 0;

rl.on('line', function (line) {
  var tokens = line.split("\t");
  var name = tokens[0];
  console.error("name: " + name + ", previous: " + previous + ", count: " + count);
  if (name === previous) {
	count += 1;
  } else {
	console.log(previous + "\t" + count);
	previous = name;
	count = 1;
  }
});
