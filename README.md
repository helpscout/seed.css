# seed-dropdown [![npm version](https://badge.fury.io/js/seed-dropdown.svg)](https://badge.fury.io/js/seed-dropdown)

Dropdown component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-dropdown --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-dropdown');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-dropdown* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-dropdown/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-dropdown-namespace: c-dropdown !default;
$seed-dropdown-header-namespace: #{$seed-dropdown-namespace}__header !default;
$seed-dropdown-menu-namespace: #{$seed-dropdown-namespace}__menu !default;
$seed-dropdown-toggle-namespace: #{$seed-dropdown-namespace}__toggle !default;
// Namespaces: States
$seed-dropdown-open-namespace: open !default;
$seed-dropdown-disabled-namespace: disabled !default;

// Config: Toggle
$seed-dropdown-toggle-background-color-open: rgba(black, 0.1) !default;
$seed-dropdown-toggle-caret-enable: true !default;
$seed-dropdown-toggle-caret-size: 4px !default;
$seed-dropdown-toggle-z-index: 1 !default;
// Config: Menu
$seed-dropdown-menu-margin: 2px 0 0 !default;
$seed-dropdown-menu-max-width: 480px !default;
$seed-dropdown-menu-min-width: 160px !default;
$seed-dropdown-menu-padding: 4px 0 !default;
$seed-dropdown-menu-z-index: 1000 !default;
// Config: Menu divier
$seed-dropdown-menu-divider-border: 1px solid #eee !default;
$seed-dropdown-menu-divider-offset: 8px !default;
// Config: Menu item
$seed-dropdown-menu-item-background-color-hover: #f5f5f5 !default;
$seed-dropdown-menu-item-color: #2b2b2b !default;
$seed-dropdown-menu-item-padding: 20px !default;
$seed-dropdown-menu-item-opacity-disabled: 0.5 !default;
$seed-dropdown-menu-item-white-space: nowrap !default;
// Config: Header
$seed-dropdown-header-color: #A5B2BD !default;
$seed-dropdown-header-font-size: 80% !default;
$seed-dropdown-header-line-height: 1.1 !default;
$seed-dropdown-header-margin: 0 !default;
$seed-dropdown-header-padding: 5px $seed-dropdown-menu-item-padding !default;
$seed-dropdown-header-white-space: nowrap !default;

// Config: Drop directions
$seed-dropdown-drop-directions: (
  up: (
    bottom: 100%,
    margin-bottom: 2px,
    top: auto
  ),
  down: (
    bottom: auto,
    margin-top: 2px,
    top: 100%
  ),
  left: (
    left: 0,
    right: auto
  ),
  right: (
    left: auto,
    right: 0
  ),
) !default;
```
