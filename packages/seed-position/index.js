var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('@seedcss/seed-breakpoints'),
  path.join(__dirname, 'scss')
);

module.exports = files;
