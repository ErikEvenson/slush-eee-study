/*
 * slush-eeegen:default
 *
 * Copyright (c) 2015, 3E Enterprises, LLC
 * Licensed under the MIT license.
 */

module.exports = function(gulp, install, conflict, template, rename, _, inquirer) {
  gulp = require('./default')(
    gulp, install, conflict, template, rename, _, inquirer
  );

  return gulp;
}