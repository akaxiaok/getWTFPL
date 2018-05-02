#! /usr/bin/env node
var fs = require('fs');
var path = require('path');
fs.readFile(path.resolve(__dirname, '../LICENSE'), 'utf8', function (err, data) {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile(path.join(process.cwd(), 'LICENSE'), data, function (err) {
      if (err) {
        console.log(err.message);
      } else {
        console.log('You got the WTFPL.');
      }
    });
  }
});

