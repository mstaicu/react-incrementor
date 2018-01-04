# ✨react-incrementor🎄

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![downloads][downloads-badge]][npmcharts]
[![PRs Welcome][prs-badge]][prs]
[![MIT License][license-badge]][license]

Component to build simple, flexible, and accessible incrementor components

## The problem

You want an incrementor component that's simple and gives you complete control over
rendering and state.

## This solution

This follows the `controlled prop pattern` and `render prop pattern` to expose an API that
renders nothing and simply encapsulates the logic of a incrementor component.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Props:](#props)
  * [defaultValue](#defaultvalue)
  * [value](#value)
  * [onChange](#onchange)
  * [render](#render)
* [Inspiration](#inspiration)
* [LICENSE](#license)

## Installation

This module is distributed via `npm`, which is bundled with `node`, and
should be installed as one of your project's `dependencies`:

```
npm install --save react-incrementor
```

> This package also depends on `react` and `prop-types`. Please make sure you
> have those installed as well.

## Usage

```jsx
import React from 'react';
import { render } from 'react-dom';

import Incrementor from 'react-incrementor';

function BasicIncrementor() {
  return (
    <Incrementor
      render={({ value, getDecrementerProps, getIncrementerProps }) => {
        return (
          <div>
            <div>
              <span>{value}</span>
            </div>

            <div>
              <button {...getDecrementerProps()}>Minus 1</button>
              <button {...getIncrementerProps()}>Plus 1</button>
            </div>
          </div>
        );
      }}
    />
  );
}

render(<BasicIncrementor />, document.getElementById('root'));
```

`react-incrementor` is the only component. It doesn't render anything itself, it just
calls the `render` function and renders that.

## Props:

### defaultValue

> `number` | defaults to `0`

The default `value` state.

### value

> `number` | **control prop**

react-incrementor manages its own state internally and calls your `onChange`
handler whenever the `value` state changes. Pass the `value` state as a prop
and that state becomes controlled. It is your responsibility to keep the `value` updated by re-rendering the component.

### onChange

> `function(value: number)` | optional

Called at interaction with the incrementor

### render

> `function({})` | _required_

This is called with an object that exposes the public API of this component.

The function is passed as the render prop:
`<Incrementor render={(value) => {/* awesome code */}} />`

<!-- This table generated via http://www.tablesgenerator.com/markdown_tables -->

| property              | category    | type                      | description                                                                                                  |
| --------------------- | ----------- | ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `value`               | state       | `boolean`                 | The current `value` state of the incrementor                                                                 |
| `getIncrementerProps` | prop getter | `function(props: object)` | returns the props you should apply to the incrementer button element you render. Includes `aria-` attributes |
| `getDecrementerProps` | prop getter | `function(props: object)` | returns the props you should apply to the decrementer button element you render. Includes `aria-` attributes |

## Inspiration

This was build as a learning exercise for the `controlled prop pattern` and `render prop pattern`. It is heavily influenced by [Kent C. Dodds](https://github.com/kentcdodds)'s [react-toggled](https://github.com/kentcdodds/react-toggled) component

## LICENSE

MIT

[build-badge]: https://img.shields.io/travis/mstaicu/react-incrementor.svg?style=flat-square
[build]: https://travis-ci.org/mstaicu/react-incrementor
[coverage-badge]: https://img.shields.io/codecov/c/github/mstaicu/react-incrementor.svg?style=flat-square
[coverage]: https://codecov.io/github/mstaicu/react-incrementor
[downloads-badge]: https://img.shields.io/npm/dm/react-incrementor.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/react-incrementor
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[license-badge]: https://img.shields.io/npm/l/react-incrementor.svg?style=flat-square
[license]: https://github.com/mstaicu/react-incrementor/blob/master/LICENSE
