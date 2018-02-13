var choo = require('choo')
var html = require('choo/html')
var css = require('sheetify')

var List = require('../list')

// add tailwind
css('tailwindcss/dist/tailwind.css')

var app = choo()
// init component preview
app.use(require('choo-component-preview')())

// store
app.use((state, emitter) => {
  state.users = [{
    id: 1,
    name: 'Jane Doe'
  }, {
    id: 2,
    name: 'Selin Ruhle'
  }]
})

// User list component
class UsersList extends List {
  static identity () {
    return 'users-list' // should be unique within components
  }

  getItems () {
    return this.state.users
  }

  header () {
    return super.header('Users')
  }
}

var layout = (view) => (s, e, r) => html `
  <body class="max-w-md mx-auto py-2">
    <div class="bg-indigo p-4 rounded text-white">
      <span>Choo Content</span>
    </div>
    <main class="py-2">
      ${view(s, e, r)}
    </main>
  </body>
`

// bind a component to a route
app.route('/users', layout((state, emit, render) => render(UsersList)))


// main route
app.route('/', layout(() => html `
  <ul>
    <li><a href="/users">Users</a></li>
  </li>
`))


// bootstrap app
app.mount(document.body)
