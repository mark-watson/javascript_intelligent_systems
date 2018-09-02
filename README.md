# Code examples for the book "Building Intelligent Systems in JavaScript"

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
 