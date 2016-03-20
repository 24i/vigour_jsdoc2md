'use strict'

var _trim = require('lodash.trim')

module.exports = exports = function convertProperty (line, i, lines, tagName, type, rest) {
  if (!rest) {
    return false
  }
  rest = _trim(rest).split('-')
  var propName = _trim(rest.shift())
  rest = _trim(rest.join('-'))
  var tagPart = '#### .' + propName
  var typePart = type ? ' (*' + type + '*)' : ''
  return tagPart + typePart + '\n\n' + rest
}
