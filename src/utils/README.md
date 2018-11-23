# lattice-utils

Lattice-utils is a utility library that is meant to be used in conjunction with [lattice](https://github.com/alexchantastic/lattice.css). Lattice-utils provides spacing, visibility, and text alignment classes for use in responsive CSS.

## Table of Contents

* [Installation](#installation)
* [Import](#import)
* [Usage](#usage)
  * [Spacing](#spacing)
  * [Visibility](#visibility)
  * [Text Alignment](#text-alignment)
  * [Responsive](#responsive)
  * [Settings](#settings)
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

### Download

[Download lattice-utils.min.css](https://raw.githubusercontent.com/alexchantastic/lattice.css/master/dist/utils/lattice-utils.min.css)

## Import

Lattice-utils is an opt-in library so it must be explicitly imported.

### CSS / SASS / SCSS

```scss
@import '~lattice.css/dist/utils/lattice-utils.css';
```

### JS

```js
import 'lattice.css/dist/utils/lattice-utils.css';
```

## Usage

Lattice-utils follows a similar naming convention to lattice.

### Spacing

Spacing classes accept a `size`.

| Size         | Default value   |
| ------------ | --------------- |
| `xs`         | `5px`           |
| `sm`         | `10px`          |
| `md`         | `20px`          |
| `lg`         | `30px`          |
| `xl`         | `50px`          |

* `padding-none`: No padding
* `padding-v-${size}`: Top and bottom padding
* `padding-h-${size}`: Right and left padding
* `padding-t-${size}`: Top padding
* `padding-r-${size}`: Right padding
* `padding-b-${size}`: Bottom padding
* `padding-l-${size}`: Left padding
* `margin-none`: No margins
* `margin-v-${size}`: Top and bottom margin
* `margin-h-${size}`: Right and left margin
* `margin-t-${size}`: Top margin
* `margin-r-${size}`: Right margin
* `margin-b-${size}`: Bottom margin
* `margin-l-${size}`: Left margin

### Visibility

* `hidden`: Set `display` property to `none`
* `visible`: Set `display` property to `block`
* `visible-flex`: Set `display` property to `flex`
* `visible-inline-flex`: Set `display` property to `inline-flex`
* `visible-inline`: Set `display` property to `inline`
* `visible-inline-block`: Set `display` property to `inline-block`

### Text Alignment

* `text-right`: Align text right
* `text-left`: Align text left
* `text-center`: Align text center

### Responsive

* `xl`: XLarge screens
* `lg`: Large screens and smaller
* `md`: Medium screens and smaller
* `sm`: Small screens and smaller
* `xs`: XSmall screens

Like lattice, lattice-utils classes have a responsive counterpart based off of the responsive namespaces. For example, to set the padding to none at the small breakpoint you could use the class `sm-padding-none`.

### Settings

#### Functionality

* `$lattice-utils-enable-responsive`: Enable responsive classes (default: `true`)

#### Sizes

* `$lattice-size-xs`: XSmall size (default: `5px`)
* `$lattice-size-sm`: Small size (default: `10px`)
* `$lattice-size-md`: Medium size (default: `20px`)
* `$lattice-size-lg`: Large size (default: `30px`)
* `$lattice-size-xs`: XLarge size (default: `50px`)

## License

Code released under the [MIT License](https://github.com/alexchantastic/lattice.css/blob/master/LICENSE).
