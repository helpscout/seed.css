var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('seed-alert'),
  require('seed-avatar'),
  require('seed-badge'),
  require('seed-base'),
  require('seed-border'),
  require('seed-breakpoints'),
  require('seed-button'),
  require('seed-card'),
  require('seed-centralize'),
  require('seed-color-scheme'),
  require('seed-color-scheme-helpscout'),
  require('seed-control'),
  require('seed-control-group'),
  require('seed-display'),
  require('seed-dropdown'),
  require('seed-exclude'),
  require('seed-family'),
  require('seed-flexy'),
  require('seed-floats'),
  require('seed-grid'),
  require('seed-hr'),
  require('seed-inline'),
  require('seed-input'),
  require('seed-input-addons'),
  require('seed-link'),
  require('seed-list'),
  require('seed-opacity'),
  require('seed-popover'),
  require('seed-props'),
  require('seed-publish'),
  require('seed-reset'),
  require('seed-responsive-wrapper'),
  require('seed-spacing'),
  require('seed-states'),
  require('seed-switch'),
  require('seed-table'),
  require('seed-this'),
  require('seed-thumbnail'),
  require('seed-typography'),
  require('seed-visibility'),
  require('seed-zi'),
  path.join(__dirname, 'scss')
);

console.log(files);

module.exports = files;
