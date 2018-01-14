var html = require('choo/html')
var _icon = require('./icon')

module.exports = (icon, href) => html`
  <a href=${href} class="text-pink-lightest bg-pink hover:bg-pink-dark shadow-lg no-underline rounded-full h-12 w-12 flex items-center justify-center" style="position: absolute; bottom: 2em; right: 2em;">
    ${_icon(icon)}
  </a>
`
