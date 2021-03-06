# seed-avatar

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-avatar.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-avatar)

> Avatar component pack for Seed

## Install

```
npm install @seedcss/seed-avatar --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-avatar/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-avatar");

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

Once that is setup, simply `@import` **seed-avatar** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-avatar/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Avatar :: Config

// Namespaces
$seed-avatar-namespace: "c-avatar" !default;
$seed-avatar-image-namespace: #{$seed-avatar-namespace}__image !default;

// Borders
$seed-avatar-border-radius: 4px !default;

// Colors
$seed-avatar-background: #f1f3f5 !default;
$seed-avatar-shadow: 0 1px 0 0 #e3e8eb !default;

// Sizes
// Default size
$seed-avatar-size: 50px !default;
// Modifier sizes
$seed-avatar-modifier-sizes: (
  lg: $seed-avatar-size,
  md: 40px,
  sm: 32px,
  xs: 28px
) !default;

```