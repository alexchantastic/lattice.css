# lattice.css

Lattice is a responsive [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)-based CSS grid framework that utilizes [BEM](http://getbem.com/) naming conventions. Lattice is fully-featured and is built with customization in mind.

Lattice is *default first* in that the grid is tuned to whichever viewport size you would prefer to optimize for first.

[View Demo](https://alexchantastic.github.io/lattice.css/)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
  * [Settings](#settings)
  * [Container](#container)
  * [Grid](#grid)
  * [Columns](#columns)
  * [Nesting](#nesting)
  * [Responsive](#responsive)
* [Compatibility](#compatibility)

## Installation

### NPM

```
npm install --save-dev lattice.css
```

### Bower

```
bower install --save-dev lattice.css
```

### Download

See [https://raw.githubusercontent.com/alexchantastic/lattice.css/master/dist/lattice.css](https://raw.githubusercontent.com/alexchantastic/lattice.css/master/dist/lattice.css)

## Usage

```
<div class="container">
  <div class="grid">
    <div class="grid__col-4">4</div>
    <div class="grid__col-4">4</div>
    <div class="grid__col-4">4</div>
  </div>
</div>
```

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
* `$lattice-gutter-width-xl`: Column gutter width on large screens (default: `15px`)
* `$lattice-gutter-width-lg`: Column gutter width on large screens (default: `15px`)
* `$lattice-gutter-width-md`: Column gutter width on medium screens (default: `15px`)
* `$lattice-gutter-width-sm`: Column gutter width on small screens (default: `15px`)
* `$lattice-gutter-width-xs`: Column gutter width on xsmall screens (default: `15px`)

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

### Columns

```
<div class="grid__col-{number}"></div>
```

Lattice is based on a 12 column layout so the total number of column width values should ideally add up to 12.

The `grid__col-{number}` class defines each *column* of the grid. Column widths can be set by using a number between 1 and 12.

For example, `grid__col-6` will fill 6/12 or half of the space and `grid__col-12` will fill 12/12 or 100% of the space.

* `grid__col--left`: Left align the column
* `grid__col--right`: Right align the column
* `grid__col--top`: Top align the column
* `grid__col--middle`: Vertically center the column
* `grid__col--bottom`: Bottom align the column
* `grid__col--stretch`: Stretch the column to the height of the grid element
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
        <div class="grid__col-6">6</div>
        <div class="grid__col-6">6</div>
      </div>
    </div>
    <div class="grid__col-6">
      <div class="grid">
        <div class="grid__col-4">4</div>
        <div class="grid__col-4">4</div>
        <div class="grid__col-4">4</div>
      </div>
    </div>
  </div>
</div>
```

### Responsive

```
<div class="container">
  <div class="grid">
    <div class="grid__col-4 grid__col-md-6 grid__col-sm-max-12">4</div>
    <div class="grid__col-4 grid__col-md-6 grid__col-sm-max-12">4</div>
    <div class="grid__col-4 grid__col-md-12 grid__col-sm-max-12">4</div>
  </div>
</div>
```

* `xl`: XLarge screens and larger
* `lg`: Large screens
* `lg-max`: Large screens and smaller
* `lg-min`: Large screens and larger
* `md`: Medium screens
* `md-max`: Medium screens and smaller
* `md-min`: Medium screens and larger
* `sm`: Small screens
* `sm-max`: Small screens and smaller
* `sm-min`: Small screens and larger
* `xs`: XSmall screens and smaller

All column classes have a responsive counterpart based off of the responsive namespaces. Additionally, all grid and column *modifier* classes also have a responsive counterpart based off of the responsive namespaces.

For example, to center align all columns within a grid at the small breakpoint you could use the class `grid--sm-center`.

#### Grid

* `grid--{namespace}-center`
* `grid--{namespace}-justify`
* `grid--{namespace}-left`
* `grid--{namespace}-right`
* `grid--{namespace}-top`
* `grid--{namespace}-middle`
* `grid--{namespace}-bottom`
* `grid--{namespace}-stretch`

#### Columns

* `grid__col--{namespace}-left`
* `grid__col--{namespace}-right`
* `grid__col--{namespace}-top`
* `grid__col--{namespace}-middle`
* `grid__col--{namespace}-bottom`
* `grid__col--{namespace}-stretch`
* `grid__col--{namespace}-hidden`
* `grid__col--{namespace}-visible`
* `grid__col--{namespace}-order-{number}`
* `grid__col--{namespace}-order-first`
* `grid__col--{namespace}-order-last`
* `grid__col--{namespace}-offset-{number}`

#### Mixins

```
@import 'lattice';

@include lattice-screen-md {
  body { background: #000; }
}
```

If you are using Lattice with [SASS](http://sass-lang.com/), you can access the built in responsive mixins.

* `lattice-screen-xl`: XLarge screens and larger
* `lattice-screen-lg`: Large screens
* `lattice-screen-lg-max`: Large screens and smaller
* `lattice-screen-lg-min`: Large screens and larger
* `lattice-screen-md`: Medium screens
* `lattice-screen-md-max`: Medium screens and smaller
* `lattice-screen-md-min`: Medium screens and larger
* `lattice-screen-sm`: Small screens
* `lattice-screen-sm-max`: Small screens and smaller
* `lattice-screen-sm-min`: Small screens and larger
* `lattice-screen-xs`: XSmall screens and smaller


## Compatibility

Lattice is compatible wherever the flexbox specification has been implemented.

* Chrome 21+
* Firefox 28+
* Safari 6.1+
* Opera 21.1
* Internet Explorer 10+

For a more comprehensive list, see [http://caniuse.com/#feat=flexbox](http://caniuse.com/#feat=flexbox).
