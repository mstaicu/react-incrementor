<div align="center">
  <h1>✨react-incrementor🎄</h1>
</div>

<p align="center" style="font-size: 1.2rem;">Component to build simple, flexible, and accessible incrementor components</p>

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![downloads][downloads-badge]][npmcharts]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]

[![PRs Welcome][prs-badge]][prs]

[![size][size-badge]][unpkg-dist]
[![gzip size][gzip-badge]][unpkg-dist]

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
* [Examples](#examples)
* [Inspiration](#inspiration)
* [LICENSE](#license)

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
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

### onChange

> `function(value: number)` | optional

Called at interaction with the incrementor

* `value`: The new value after increment / decrement

### value

> `number` | **control prop**

react-incrementor manages its own state internally and calls your `onChange`
handler whenever the `value` state changes. Pass the `value` state as a prop
and that state becomes controlled. It is your responsibility to keep the `value` updated by re-rendering the component.

### render

> `function({})` | _required_

This is called with an object that exposes the public API of this component.

The function is passed as the render prop:
`<Incrementor render={(value) => {/* awesome code */}} />`

<!-- This table was generated via http://www.tablesgenerator.com/markdown_tables -->

| property              | category    | type                      | description                                                                                                  |
| --------------------- | ----------- | ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `value`               | state       | `boolean`                 | The current `value` state of the incrementor                                                                 |
| `getIncrementerProps` | prop getter | `function(props: object)` | returns the props you should apply to the incrementer button element you render. Includes `aria-` attributes |
| `getDecrementerProps` | prop getter | `function(props: object)` | returns the props you should apply to the decrementer button element you render. Includes `aria-` attributes |

## Inspiration

This was build as a learning exercise for the `controlled prop pattern` and `render prop pattern`. It is heavily influenced by [Kent C. Dodds](https://github.com/kentcdodds)'s [react-toggled](https://github.com/kentcdodds/react-toggled) component

## LICENSE

MIT
