# seed-dot-nav

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-dot-nav.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-dot-nav)

> Dot navigation component pack for Seed

## Install

```
npm install @seedcss/seed-dot-nav --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-dot-nav/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-dot-nav");

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

Once that is setup, simply `@import` **seed-dot-nav** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-dot-nav/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// dot-nav :: Config
@import "pack/seed-color-scheme/__index";

// Namespace
$seed-dot-nav-namespace: c-dot-nav !default;
$seed-dot-nav-item-namespace: #{$seed-dot-nav-namespace}__item !default;
$seed-dot-nav-link-namespace: #{$seed-dot-nav-namespace}__link !default;

// Configs
$seed-dot-nav-item-spacing-multiplier: 3 !default;
$seed-dot-nav-item-margin: 0 !default;
$seed-dot-nav-link-focus-outline: none !default;
$seed-dot-nav-dot-transition: background-color 0.2s ease !default;
$seed-dot-nav-dot-size: 10px !default;
$seed-dot-nav-dot-color: rgba(black, 0.2) !default;
$seed-dot-nav-dot-color-hover: rgba(black, 0.4) !default;
$seed-dot-nav-dot-active-color: _color(blue, 500) !default;
$seed-dot-nav-dot-active-size-increase: 1px !default;
$seed-dot-nav-dot-transform: translate(-50%, -50%) !default;

$seed-dot-nav-alignment: (
  left: flex-start,
  center: center,
  right: flex-end,
) !default;

$seed-dot-nav-dot-sizes: (
  lg: 16px,
  md: $seed-dot-nav-dot-size,
  sm: 8px,
) !default;

```