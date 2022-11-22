# Code examples for the book "Building Intelligent Systems in JavaScript"

You can read all of my books for free on my
website [https://markwatson.com](https://markwatson.com).

If you would like to support my work please consider purchasing my books on [Leanpub](https://leanpub.com/u/markwatson) and star my git repositories that you find useful on [GitHub](https://github.com/mark-watson?tab=repositories&q=&type=public). You can also interact with me on social media on [Mastodon](https://mastodon.social/@mark_watson) and [Twitter](https://twitter.com/mark_l_watson).

## NOTE: the 2nd edition of this book is a work in progress. Use the git repo https://github.com/mark-watson/javascript_intelligent_systems_2nd_edition when it is made public

The github repo for the second edition examples will be made when the 2nd edition is published.

There will be a free update for people who purchased the first edition.

The main changes for the second edition are:

- update to JavaScript version ES6
- added TensorFlow.js examples
- added more NLP examples using Deep Learning
- Semantic web and linked data
- JavaScript implementation of {KBCreator](http://kgcreator.com)} (this example is AGPL licensed but an alternative commercial friendly lincense will be available for $50)

## do a `git checkout master` to get back to the main branch

## Donate on Patreon to support all of my projects

Please visit [https://www.patreon.com/markwatson](https://www.patreon.com/markwatson) and sign up to donate $1/month

## open Source

All of my code in this repository may be used under either the Apache 2, the LGPL version 3 or the GPL 3 licenses - you choose depending on which license works best for you.

You may purchase this book at https://leanpub.com/aijavascript

When you purchase this book you get Kindle, ePub (for iPad) and PDF versions. Book updates are free so if you buy the book please provide an email address so Leanpub can notify you that updates are available.

September 2, 2018: to support [Facebook's Flow static type checker](https://flow.org/en/): added VS-CODE vscode-flow-ide extension support in **src** directory.

## Installing libraries

Each chapter in the book mentions NPM dependencies. Here is a list in the order they are used in the book:

~~~~~~~~
npm install flow-bin
npm install natural
npm install wordnet-db
npm install calais
npm install pg
npm install mongodb
npm install mongoose
npm install solr-client
npm install aws-sdk
npm install stardog
npm install sparql-client
npm install neo4j-js
npm install geode
npm install jsdom
npm install htmlparser
npm install cradle
npm install sys
~~~~~~~~

## Optional: run Facebook's Flow static type checker:

~~~~~~~~
npm run flow
~~~~~~~~

If you use the VS-CODE IDE in the **src** directory, you might want to install the vscode-flow-ide extension in VS-CODE.
 
