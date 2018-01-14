# choo-content

Components for data driven apps in choo


# Install

```bash
$ yarn add choo-content
```

# Usage

choo-content depends on styles from [tailwind](https://tailwindcss.com). You may add it via [sheetify](https://github.com/stackcss/sheetify/). It's also dependent to [choo-component-preview](https://github.com/yoshuawuyts/choo-component-preview) until it's merged to core.


### Example

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

Please see complete example at [/dbtek/choo-content/blob/master/example/index.js].