# choo-content
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Components for data driven apps in choo


### Install

```bash
$ yarn add choo-content
```

### Usage

choo-content depends on styles from [Tailwind](https://tailwindcss.com). You may add it via [sheetify](https://github.com/stackcss/sheetify/). It's also dependent to [choo-component-preview](https://github.com/yoshuawuyts/choo-component-preview) until it's merged to core.


#### Example

```js
var List = require('choo-content/list')

// User list component
class UsersList extends List {
  static identity () {
    return 'users-list' // should be unique within components
  }

  getItems () {
    return this.state.users
  }
}

// render
(state, emit, render) => {
  render(UsersList, {})
}

```

Please see complete example at [example/index.js](/dbtek/choo-content/blob/master/example/index.js).

### Author
İsmail Demirbilek - [@dbtek](https://twitter.com/dbtek)



[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/choo-content.svg?style=flat-square
[3]: https://npmjs.org/package/choo-content
[4]: https://img.shields.io/travis/dbtek/choo-content/master.svg?style=flat-square
[5]: https://travis-ci.org/dbtek/choo-content
[6]: https://img.shields.io/codecov/c/github/dbtek/choo-content/master.svg?style=flat-square
[7]: https://codecov.io/github/dbtek/choo-content
[8]: http://img.shields.io/npm/dm/choo-content.svg?style=flat-square
[9]: https://npmjs.org/package/choo-content
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
