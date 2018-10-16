var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder([
  require('@seedcss/seed-config'),
  path.join(__dirname, 'scss'),
]);

module.exports = files;
