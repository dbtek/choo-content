var html = require('choo/html')

module.exports = (name, className = 'text-lg') => html`<i class="material-icons ${className}">${name}</i>`
