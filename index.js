var Component = require('nanocomponent')
var html = require('choo/html')
var header = require('./components/header')

module.exports = class Content extends Component {
  constructor (id, state, emit) {
    super(id, state, emit)
    this.state = state
    this.emit = emit
  }

  header (title) {
    return header(title)
  }

  footer () {
    return ''
  }

  body (props) {
    throw new Error('Content: body() should be implemented')
  }

  createElement (props) {
    return html`
      <div class="content">
        ${this.header()}
        ${this.body(props)}
        ${this.footer()}
      </div>
    `
  }

  update () {
    return false
  }
}
