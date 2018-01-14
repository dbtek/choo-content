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
var choo = require('choo')
var css = require('sheetify')

var List = require('choo-content/list')

// add tailwind
css(require('tailwindcss/dist/tailwind'))

var app = choo()
// init component preview
app.use(require('choo-component-preview')())

// User list component
class UsersList extends List {
  static identity () {
    return 'users-list' // should be unique within components
  }

  getItems () {
    return this.state.users
  }
}

// bind a component to a route
app.route('/users', (state, emit, render) => render(List, {}))

// bootstrap app
app.mount(document.body)

```