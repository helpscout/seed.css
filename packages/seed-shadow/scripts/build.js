'use strict';

var pkg = require('../package.json');
var fs = require('fs');
var mkdirp = require('mkdirp');
var pathfinder = require('./pathfinder');
var sass = require('node-sass');

const file = pkg.name.replace('@seedcss/', '')
var includePaths = pathfinder(
  require('seed-dash'),
  require('seed-props'),
  require('seed-publish')
);

// Default .css compile
sass.render({
  file: `./scss/pack/${file}/__index.scss`,
  includePaths: includePaths,
  outputStyle: 'compact'
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    mkdirp('./dist');
    fs.writeFile('./dist/'+file+'.css', result.css, function(err){
      if(!err){
        return console.log(file+'.css created.');
      }
    })
  }
});

// Minified .css compile
sass.render({
  file: `./scss/pack/${file}/__index.scss`,
  includePaths: includePaths,
  outputStyle: 'compressed'
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    mkdirp('./dist');
    fs.writeFile('./dist/'+file+'.min.css', result.css, function(err){
      if(!err){
        return console.log(file+'.min.css created.');
      }
    })
  }
});
