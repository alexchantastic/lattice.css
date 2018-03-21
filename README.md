# lattice.css

Lattice is a responsive [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)-based CSS grid framework that utilizes [BEM](http://getbem.com/) naming conventions. Lattice is fully-featured and is built with customization in mind.

Lattice is *default first* in that the grid is tuned to whichever viewport size you would prefer to optimize for first.

[View Demo](https://alexchantastic.github.io/lattice.css/)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
  * [Container](#container)
  * [Grid](#grid)
  * [Columns](#columns)
  * [Nesting](#nesting)
  * [Responsive](#responsive)
  * [Settings](#settings)
* [Compatibility](#compatibility)
* [License](#license)

## Installation

### Yarn

```
yarn add lattice.css
```

### npm

```
npm install lattice.css
```

### Bower

```
bower install lattice.css
```

### Download

[Download lattice.min.css](https://raw.githubusercontent.com/alexchantastic/lattice.css/master/dist/lattice.min.css)

## Usage

```
<div class="container">
  <div class="grid">
    <div class="grid__col-4"></div>
    <div class="grid__col-4"></div>
    <div class="grid__col-4"></div>
  </div>
</div>
```

|                         | Default      | XLarge       | Large        | Medium       | Small        | XSmall       |
| ----------------------- | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| **Breakpoint**          | None         | `≥1201`      | `<1200`      | `<992`       | `<768`       | `<544`       |
| **Max container width** | `1140px`     | `1140px`     | `940px`      | `720px`      | `576px`      | `100%`       |
| **Class prefix**        | None         | `xl-`        | `lg`         | `md-`        | `sm-`        | `xs-`        |
| **Gutter width**        | `15px`       | `15px`       | `15px`       | `15px`       | `15px`       | `15px`       | 

### Container

```
<div class="container"></div>
```

The `container` class is used as a base *container* for the grid and adapts to each breakpoint.

You can use the modifier class `container--fluid` to always have the container be 100% of the parent element.

### Grid

```
<div class="grid"></div>
```

The `grid` class defines each *row* of the grid.

* `grid--center`: Horizontally center columns
* `grid--justify`: Evenly space out columns
* `grid--left`: Left align columns
* `grid--right`: Right align columns
* `grid--top`: Top align columns
* `grid--middle`: Vertically center columns
* `grid--bottom`: Bottom align columns
* `grid--stretch`: Stretch columns to the height of the grid element
* `grid--no-gutters`: Remove gutters from columns

### Columns

```
// Specified width column
<div class="grid__col-{number}"></div>

// Unspecified width column
<div class="grid__col"></div>
```

Lattice is based on a 12 column layout so the total number of column width values should ideally add up to 12.

The `grid__col-{number}` class defines each *column* of the grid. Column widths can be set by using a number between 1 and 12.

```
// This will use 6/12 or 50% of the space
<div class="grid">
  <div class="grid__col-6"></div>
</div>

// This will use 12/12 or 100% of the space
<div class="grid">
  <div class="grid__col-12"></div>
</div>
```

Alternatively, you can use the `grid__col` class to define a column that will take as much space as it can. The `grid__col` class will use up as much space as possible before wrapping.

```
// This will use 100% of the space
<div class="grid">
  <div class="grid__col"></div>
</div>

// Each grid__col will use 50% of the space
<div class="grid">
  <div class="grid__col"></div>
  <div class="grid__col"></div>
</div>
```

You can use `grid__col-{number}` and `grid__col` definitions in the same `grid` row.

```
<div class="grid">
  // This will use 50% of the space
  <div class="grid__col-6"></div>

  // This will use the remaining space (i.e., 50%)
  <div class="grid__col"></div>
</div>
```

* `grid__col--left`: Left align the column
* `grid__col--right`: Right align the column
* `grid__col--top`: Top align the column
* `grid__col--middle`: Vertically center the column
* `grid__col--bottom`: Bottom align the column
* `grid__col--stretch`: Stretch the column to the height of the grid element
* `grid__col--no-gutters`: Removes the gutters from the column
* `grid__col--hidden`: Hide the column
* `grid__col--visible`: Show the column
* `grid__col--order-{number}`: Re-order the column based on the `{number}` specified (between 1 and 12)
* `grid__col--order-first`: Place the column as the first element irrespective of source order
* `grid__col--order-last`: Place the column as the last element irrespective of source order
* `grid__col--offset-{number}`: Offset the column based on the `{number}` specified (between 0 and 12)

### Nesting

Grids can be nested within one another like so:

```
<div class="container">
  <div class="grid">
    <div class="grid__col-6">
      <div class="grid">
        <div class="grid__col-6"></div>
        <div class="grid__col-6"></div>
      </div>
    </div>
    <div class="grid__col-6">
      <div class="grid">
        <div class="grid__col-4"></div>
        <div class="grid__col-4"></div>
        <div class="grid__col-4"></div>
      </div>
    </div>
  </div>
</div>
```

### Responsive

```
<div class="container">
  <div class="grid">
    <div class="grid__col-4 md-grid__col-6 sm-grid__col-12"></div>
    <div class="grid__col-4 md-grid__col-6 sm-grid__col-12"></div>
    <div class="grid__col-4 md-grid__col-12"></div>
  </div>
</div>
```

* `xl`: XLarge screens
* `lg`: Large screens and smaller
* `md`: Medium screens and smaller
* `sm`: Small screens and smaller
* `xs`: XSmall screens

All column classes have a responsive counterpart based off of the responsive namespaces. Additionally, all grid and column *modifier* classes also have a responsive counterpart based off of the responsive namespaces.

For example, to center align all columns within a grid at the small breakpoint you could use the class `sm-grid--center`.

#### Grid

* `{namespace}-grid--center`
* `{namespace}-grid--justify`
* `{namespace}-grid--left`
* `{namespace}-grid--right`
* `{namespace}-grid--top`
* `{namespace}-grid--middle`
* `{namespace}-grid--bottom`
* `{namespace}-grid--stretch`
* `{namespace}-grid--no-gutters`

#### Columns

* `{namespace}-grid__col--left`
* `{namespace}-grid__col--right`
* `{namespace}-grid__col--top`
* `{namespace}-grid__col--middle`
* `{namespace}-grid__col--bottom`
* `{namespace}-grid__col--stretch`
* `{namespace}-grid__col--no-gutters`
* `{namespace}-grid__col--hidden`
* `{namespace}-grid__col--visible`
* `{namespace}-grid__col--order-{number}`
* `{namespace}-grid__col--order-first`
* `{namespace}-grid__col--order-last`
* `{namespace}-grid__col--offset-{number}`

#### Mixins

```
@import 'lattice';

@include lattice-screen-md-only {
  // Some CSS
}
```

If you are using Lattice with [SASS](http://sass-lang.com/), you can access the built in responsive mixins.

* `lattice-screen-xl-min`: XLarge screens
* `lattice-screen-lg-only`: Large screens
* `lattice-screen-lg-max`: Large screens and smaller
* `lattice-screen-lg-min`: Large screens and larger
* `lattice-screen-md-only`: Medium screens
* `lattice-screen-md-max`: Medium screens and smaller
* `lattice-screen-md-min`: Medium screens and larger
* `lattice-screen-sm-only`: Small screens
* `lattice-screen-sm-max`: Small screens and smaller
* `lattice-screen-sm-min`: Small screens and larger
* `lattice-screen-xs-max`: XSmall screens

### Settings

#### Functionality

* `$lattice-enable-responsive`: Enable responsive classes (default: `true`)

#### Breakpoints

* `$lattice-breakpoint-lg`: Large screen breakpoint (default: `1200px`)
* `$lattice-breakpoint-md`: Medium screen breakpoint (default: `992px`)
* `$lattice-breakpoint-sm`: Small screen breakpoint (default: `768px`)
* `$lattice-breakpoint-xs`: XSmall screen breakpoint (default: `544px`)

**Note:** There is no xlarge screen breakpoint setting as this is automatically calculated from the large screen breakpoint.

#### Container Widths

* `$lattice-container-width-default`: Container default width (default: `1140px`)
* `$lattice-container-width-xl`: Container width on large screens (default: `1140px`)
* `$lattice-container-width-lg`: Container width on large screens (default: `940px`)
* `$lattice-container-width-md`: Container width on medium screens (default: `720px`)
* `$lattice-container-width-sm`: Container width on small screens (default: `576px`)
* `$lattice-container-width-xs`: Container width on xsmall screens (default: `100%`)

#### Gutter Widths

* `$lattice-gutter-width-default`: Column gutter default width (default: `15px`)
* `$lattice-gutter-width-xl`: Column gutter width on large screens (default: `$lattice-gutter-width-default`)
* `$lattice-gutter-width-lg`: Column gutter width on large screens (default: `$lattice-gutter-width-default`)
* `$lattice-gutter-width-md`: Column gutter width on medium screens (default: `$lattice-gutter-width-default`)
* `$lattice-gutter-width-sm`: Column gutter width on small screens (default: `$lattice-gutter-width-default`)
* `$lattice-gutter-width-xs`: Column gutter width on xsmall screens (default: `$lattice-gutter-width-default`)

## Compatibility

Lattice is compatible wherever the flexbox specification has been implemented.

* Chrome 21+
* Firefox 28+
* Safari 6.1+
* Opera 21.1
* Internet Explorer 10+

For a more comprehensive list, see [http://caniuse.com/#feat=flexbox](http://caniuse.com/#feat=flexbox).

## License
Code released under the [MIT License](https://github.com/alexchantastic/lattice.css/blob/master/LICENSE).
