

var cozydb = require('cozydb');

var CountModel = cozydb.getModel('Count', {
  name: String,
  description: String,
});

module.exports = CountModel;