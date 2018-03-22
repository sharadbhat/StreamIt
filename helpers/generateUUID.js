const shortid = require('shortid');

const uniqueID = function () {
  while (true) {
    var id = shortid.generate();
    if (id.length === 10) {
      return id;
    }
  }
}

module.exports = uniqueID;
