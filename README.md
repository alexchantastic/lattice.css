# lattice.css

Lattice is a responsive [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)-based CSS grid framework that utilizes [BEM](http://getbem.com/) naming conventions. Lattice is fully-featured and is built with customization in mind.

## Installation

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

#### Breakpoints

* `$lattice-breakpoint-md`: Medium screen breakpoint
* `$lattice-breakpoint-sm`: Small screen breakpoint
* `$lattice-breakpoint-xs`: Xsmall screen breakpoint

#### Container Widths

* `$lattice-container-width-default`: Container default width
* `$lattice-container-width-lg`: Container width at large screen
* `$lattice-container-width-md`: Container width at medium screen
* `$lattice-container-width-sm`: Container width at small screen
* `$lattice-container-width-xs`: Container width at xsmall screen

#### Gutter Widths

* `$lattice-gutter-width-default`: Column gutter default width
* `$lattice-gutter-width-lg`: Column gutter width at large screen
* `$lattice-gutter-width-md`: Column gutter width at medium screen
* `$lattice-gutter-width-sm`: Column gutter width at small screen
* `$lattice-gutter-width-xs`: Column gutter width at xsmall screen

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

* `.grid--center`: Horizontally center columns
* `.grid--justify`: Evenly space out columns
* `.grid--left`: Left align columns
* `.grid--right`: Right align columns
* `.grid--top`: Top align columns
* `.grid--bottom`: Bottom align columns
* `.grid--middle`: Vertically center columns
* `.grid--stretch`: Stretch columns to the height of the grid element

### Columns

```
<div class="grid__col-{number}"></div>
```

The `grid__col-{number}` class defines each *column* of the grid. Column widths can be set by using a between 1 and 12.

For example, `grid__col-6` will fill 6/12 or half of the space and `grid__col-12` will fill 12/12 or 100% of the space.

* `.grid__col--left`: Left align the column
* `.grid__col--right`: Right align the column
* `.grid__col--top`: Top align the column
* `.grid__col--bottom`: Bottom align the column
* `.grid__col--middle`: Vertically center the column
* `.grid__col--stretch`: Stretch the column to the height of the grid element
* `.grid__col--hidden`: Hide the column
* `.grid__col--visible`: Show the column
* `.grid__col--order-{number}`: Re-order the column based on the `{number}` specified (between 1 and 12)
* `.grid__col--order-first`: Place the column as the first element irrespective of source order
* `.grid__col--order-last`: Place the column as the last element irrespective of source order
* `.grid__col--offset-{number}`: Offset the column based on the `{number}` specified (between 0 and 12)

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
    <div class="grid__col-4 grid__col-lg-4 grid__col-md-6 grid__col-sm-12 grid__col-xs-12">4</div>
    <div class="grid__col-4 grid__col-lg-4 grid__col-md-6 grid__col-sm-12 grid__col-xs-12">4</div>
    <div class="grid__col-4 grid__col-lg-4 grid__col-md-12 grid__col-sm-12 grid__col-xs-12">4</div>
  </div>
</div>
```

All grid and column classes have a responsive counterpart based off of the `lg`, `md`, `sm`, and `xs` namespaces.

Additionally, all grid and column *modifier* classes also have a responsive counterpart based off of the `lg`, `md`, `sm`, and `xs` namespaces.

For example, to center align all columns within a grid at the small breakpoint you could use the class `grid--sm-center`.

#### Grid

* `.grid--{namespace}-center`
* `.grid--{namespace}-justify`
* `.grid--{namespace}-left`
* `.grid--{namespace}-right`
* `.grid--{namespace}-top`
* `.grid--{namespace}-bottom`
* `.grid--{namespace}-middle`
* `.grid--{namespace}-stretch`

#### Columns

* `.grid__col--{namespace}-left`
* `.grid__col--{namespace}-right`
* `.grid__col--{namespace}-top`
* `.grid__col--{namespace}-bottom`
* `.grid__col--{namespace}-middle`
* `.grid__col--{namespace}-stretch`
* `.grid__col--{namespace}-hidden`
* `.grid__col--{namespace}-visible`
* `.grid__col--{namespace}-order-{number}`
* `.grid__col--{namespace}-order-first`
* `.grid__col--{namespace}-order-last`
* `.grid__col--{namespace}-offset-{number}`
