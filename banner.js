// Seed Grid :: Banner

var fs = require('fs');
var pkg = require('./package.json');
var config = require('./config.js');

var banner = ['/**',
  ' * '+ config.name +' v'+ pkg.version +' ('+ pkg.homepage +')',
  ' * '+ pkg.description,
  ' * Licensed under '+ pkg.license +' ('+ config.repo +'/blob/master/LICENSE)',
  ' */',
  ''].join('\n');

var dir = './dist/';

fs.readdir(dir, function(err, files) {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  files.forEach(function(file, index) {
    fs.readFile(dir + file, 'utf-8', function(err, data) {
      if (err) {
        return console.log(err);
      }

      data = banner + data;

      fs.writeFile(dir + file, data, 'utf-8', function(err) {
        if (err) {
          return console.log(err);
        }
      });
    });
  });
});
