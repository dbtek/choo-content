var html = require('choo/html')
var logger = require('nanologger')('Content:Edit')
var Content = require('./index')
var notify = require('notier')

module.exports = class Edit extends Content {
  constructor () {
    super(...arguments)
    this.submitting = false
  }

  load () {
    throw new Error('content:Edit load() should be implemented.')
  }

  form () {
    throw new Error('content:Edit form() should be implemented.')
  }

  footer (props) {
    return html`
      <div>
        <h2 class="py-4 uppercase text-xs text-red font-bold">Tehlikeli Bölge</h2>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="flex items-center justify-between">
            <div>
              <span class="font-bold">${props.delete.title}</span>
              <br>
              <span class="text-xs">${props.delete.description}</span>
            </div>
            <div>
              <button onclick=${this.predelete.bind(this)} type="button" class="no-underline hover:bg-red bg-transparent text-red hover:text-white py-2 px-4 rounded">${props.delete.title}</button>  
            </div>
          </div>
        </div>
      </div>
    `
  }

  predelete () {
    return new Promise((resolve, reject) => {
      notify.confirm('Kayıt silinecek. Emin misiniz?')
        .then(() => {
          try {
            return this.delete()
          } catch (e) {
            logger.error(e.message)
            reject(e.message)
          }
        })
        .catch((e) => {
          logger.info('Canceled delete')
          reject(new Error('Canceled delete'))
        })
    })
  }

  delete () {
    throw new Error('content:Edit delete() should be implemented.')
  }

  presave (e) {
    e.preventDefault()
    this.submitting = true
    this.rerender()
    return this.save(e)
  }

  save (e) {
    throw new Error('content:Edit save() should be implemented.')
  }

  createElement (props) {
    function handleCancel (e) {
      e.preventDefault()
      window.history.back()
    }

    return html`
      <div class="content edit">
        <div class="content edit">
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
      </div>
    `
  }
}
