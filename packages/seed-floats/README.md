# seed-floats

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-floats.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-floats)

> Floats utility pack for Seed

## Install

```
npm install @seedcss/seed-floats --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-floats/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-floats");

gulp.task("sass", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(
      sass({
        includePaths: pathfinder(
          // Other includePaths...
          pack
        )
      })
    )
    .pipe(gulp.dest("./css"));
});
```

Once that is setup, simply `@import` **seed-floats** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-floats/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Floats :: Config

// Namespaces
$seed-floats-clear-namespace: "u-clear" !default;
$seed-floats-clearfix-namespace: "u-clearfix" !default;
$seed-floats-pull-namespace: "u-pull" !default;

$seed-floats-pull: (
  left: left,
  right: right,
  none: none
) !default;

$seed-floats-clear: (
  none: none,
  left: left,
  right: right,
  both: both
) !default;

```