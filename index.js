var Component = require('nanocomponent')
var html = require('choo/html')
var header = require('./components/header')

module.exports = class Content extends Component {
  constructor ([name, state, emit]) {
    super()
    this.state = state
    this.emit = emit
  }

  header (props) {
    return header(props.title)
  }

  footer (props) {
    return ''
  }

  body (props) {
    throw new Error('Content: body() should be implemented')
  }

  createElement (props) {
    return html`
      <div class="content">
        ${this.header(props)}
        ${this.body(props)}
        ${this.footer(props)}
      </div>
    `
  }

  update () {
    return false
  }
}