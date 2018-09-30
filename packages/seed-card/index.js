var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('@seedcss/seed-border'),
  require('@seedcss/seed-breakpoints'),
  require('@seedcss/seed-dash'),
  require('@seedcss/seed-publish'),
  path.join(__dirname, 'scss')
);

module.exports = files;
