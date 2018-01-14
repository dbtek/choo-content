var html = require('choo/html')
var Content = require('./index')

module.exports = class Add extends Content {
  constructor (args) {
    super(args)
    this.submitting = false
  }

  form () {
    throw new Error('content:Add form() should be implemented.')
  }

  presave (e) {
    e.preventDefault()
    this.submitting = true
    this.rerender()
    return this.save(e)
  }

  save (e) {
    throw new Error('content:Add save() should be implemented.')
  }

  createElement (props) {
    function handleCancel (e) {
      e.preventDefault()
      window.history.back()
    }

    return html`
      <div class="content add">
        ${this.header(props)}
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form onsubmit=${this.presave.bind(this)} class="md:w-1/2">
            ${this.form(props)}
            <div>
              <a href=${document.referrer} onclick=${handleCancel} class="no-underline hover:bg-red bg-transparent text-red hover:text-white py-2 px-4 rounded">İptal</a>
              <button class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 rounded ${this.submitting ? 'opacity-50 cursor-not-allowed' : ''}"
                type="submit" disabled=${this.submitting}>
                Kaydet
              </button>
            </div>
          </form>
        </div>
        ${this.footer(props)}
      </div>
    `
  }
}
