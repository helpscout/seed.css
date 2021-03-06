# seed-border

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-border.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-border)

> Border theme pack for Seed

## Install

```
npm install @seedcss/seed-border --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-border/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-border");

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

Once that is setup, simply `@import` **seed-border** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-border/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Border :: Config

// Namespaces
$seed-border-namespace: "t-bdr" !default;
$seed-border-radius-namespace: "#{$seed-border-namespace}-r" !default;

// Defaults
$seed-border-color: #eee !default;
$seed-border-radius: 3px !default;
$seed-border-size: 1px !default;
$seed-border-style: solid !default;

// Important (Typical convention for utility purposes)
$seed-border-use-important: true !default;

// Directions
$seed-border-directions: (
  all: false,
  top: "t",
  right: "r",
  bottom: "b",
  left: "l",
  none: false,
) !default;

$seed-border-radius-sizes: (
  0: 0px,
  1: 1px,
  2: 2px,
  3: 3px,
  4: 4px,
  circle: 50%,
  pill: 9999px,
) !default;

// Base variable
$seed-border: $seed-border-size $seed-border-style $seed-border-color !default;

```