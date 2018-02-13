var Component = require('nanocomponent')
var html = require('choo/html')
var header = require('./components/header')


/**
 * Base content class. Can be used to derive custom components.
 * Use it with cases List, Add, Edit components are not suitable for.
 * @exports Content
 */
class Content extends Component {
  /**
   * @param  {String} id - Id of component
   * @param  {Object} state
   * @param  {function} emit
   */
  constructor ([id, state, emit]) {
    super(...arguments)
    this.state = state
    this.emit = emit
  }

  /**
   * Creates header. Use with super.header(text) in extended classes.
   * @param  {String|HTMLElement} - Title.
   * @return {HTMLElement} - Header.
   */
  header (title) {
    return header(title)
  }

  /**
   * Footer method. Extend to add a custom footer.
   * @return {HTMLElement}
   */
  footer () {
    return ''
  }

  /**
   * Main content. Should be extended.
   * @param  {Object} props - Props send with render()
   * @return {HTMLElement}
   */
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


module.exports = Content