'use strict'

var _trim = require('lodash.trim')

module.exports = exports = function convertOther (line, i, lines, tagName, type, rest) {
  var tagPart = '- **' + tagName + '**'
  var typePart = type ? ' {*' + type + '*}' : ''
  var restPart = (rest.slice(0, 1) === ' ' ? '' : ' ') + rest || ''
  var newLine = tagPart + typePart + restPart
  return _trim(newLine)
}
