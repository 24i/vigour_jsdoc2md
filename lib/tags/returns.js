'use strict'

var _trim = require('lodash.trim')

module.exports = exports = function convertReturns (line, i, lines, tagName, type, rest) {
  if (!rest) {
    return false
  }
  rest = _trim(rest).split('-')
  var valueName = ' ' + rest.shift()
  if (rest.length === 0) {
    return false
  }
  rest = _trim(rest.join('-'))
  rest = rest === '' ? '' : '- ' + rest
  var tagPart = '- **' + tagName + '**'
  var typePart = type ? ' {*' + type + '*}' : ''
  var newLine = _trim(tagPart + typePart + valueName + rest)
  return newLine
}
