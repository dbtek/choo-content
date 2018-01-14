var html = require('choo/html')
var Content = require('./index')
var icon = require('./components/icon')
var fab = require('./components/fab')

module.exports = class List extends Content {
  getItems (props) {
    throw new Error('content:List getItems() should be implemented')
  }

  fab () {
    return fab('add', `${window.location.pathname}/new`)
  }

  item (item) {
    return html`
      <div class="p-4 mb-4 shadow-lg rounded rounded-lg bg-white font-semibold">
        <a href="${window.location.pathname}/${item.id}/edit" class="float-right text-indigo-dark">
          ${icon('edit')}
        </a>
        <a href="${window.location.pathname}/${item.id}" class="no-underline text-grey-darkest">
          ${item.name}
        </a>
      </div>`
  }

  body (props) {
    return html`
      <div class="body">
        ${this.getItems(props).map(i => this.item(i, props))}
      </div>
    `
  }

  createElement (props) {
    return html`
      <div class="content list">
        ${this.header(props)}
        ${this.body(props)}
        ${this.footer(props)}
        ${this.fab(props)}
      </div>
    `
  }
}
