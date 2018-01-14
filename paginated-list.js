var html = require('choo/html')
var List = require('./list')
var icon = require('./components/icon')

module.exports = class PaginatedList extends List {
  constructor (arg) {
    super(arg)
    this.page = (this.state.query.page || 1)
    this.itemsPerPage = 10
    this.numberOfItems = 10
    this.setNumberOfItems()
  }

  getItems (props) {
    throw new Error('content:List getItems() should be implemented')
  }

  setNumberOfItems () {
    throw new Error('content:PaginatedList setNumberOfItems() should be implemented to update PaginatedList.numberOfItems')
  }

  getPaginationFilter () {
    return `first: ${this.page * this.itemsPerPage}, skip: ${(this.page - 1) * this.itemsPerPage}`
  }

  prevPage () {
    if (this.page === 1) return
    this.page--
    this.load()
  }

  getMaxPage () {
    if (!this.numberOfItems) return 1
    return Math.ceil(this.numberOfItems / this.itemsPerPage)
  }

  nextPage () {
    if (this.getMaxPage() === this.page) return
    this.page++
    this.load()
  }

  setPage (page) {
    if (page < 0) return
    if (page > this.getMaxPage()) return
    this.page = page
    this.load()
  }

  paginate () {
    var maxPage = this.getMaxPage()
    if (maxPage === 1) return ''
    var pages = []
    for (var i = 1; i <= maxPage; i++) {
      pages.push(i)
    }
    return html`
      <div class="inline-flex">
        <button class="${this.page === 1 ? 'bg-grey-lighter text-grey-dark' : 'bg-grey-light hover:bg-grey text-grey-darkest'} font-bold py-2 px-4 rounded-l"
          onclick=${this.prevPage.bind(this)} disabled=${this.page === 1}>
          ${icon('navigate_before')}
        </button>
        ${pages.map((p) => html`
          <button class="bg-grey-light hover:bg-grey ${this.page === p ? 'text-indigo' : 'text-grey-darkest'} border py-2 px-4" onclick=${e => this.setPage(p)}>${p}</button>
        `)}
        <button class="${maxPage === this.page ? 'bg-grey-lighter text-grey-dark' : 'bg-grey-light hover:bg-grey text-grey-darkest'} font-bold py-2 px-4 rounded-r"
          onclick=${this.nextPage.bind(this)} disabled=${maxPage === this.page}>
          ${icon('navigate_next')}
        </button>
      </div>
    `
  }

  createElement (props) {
    return html`
      <div class="content list paginated">
        ${this.header(props)}
        ${this.body(props)}
        ${this.footer(props)}
        ${this.paginate()}
        ${this.fab(props)}
      </div>
    `
  }
}
