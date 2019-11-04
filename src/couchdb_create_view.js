// @flow

const cradle = require('cradle');
const db = new(cradle.Connection)().database('news');

db.save('_design/titles', {
  all: {
    map: function (doc) {
      if (doc.title) { emit(doc.title, doc); }
    }
  },
  fishing: {
    map: function (doc) {
      if (doc.title && /fishing/i.test(doc.title)) {
        emit(null, doc);
      }
    }
  }
});