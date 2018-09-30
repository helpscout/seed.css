var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('@seedcss/seed-input'),
  require('@seedcss/seed-states'),
  require('@seedcss/seed-publish'),
  path.join(__dirname, 'scss')
);

module.exports = files;
