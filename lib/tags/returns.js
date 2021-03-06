'use strict'

var _trim = require('lodash.trim')

module.exports = exports = function convertReturns (line, i, lines, tagName, name, type, rest) {
  // console.log('line', line)
  // console.log('tagName', tagName)
  // console.log('name', name)
  // console.log('type', type)
  // console.log('rest', rest)
  if (!rest) {
    return false
  }
  var keepRest = true
  rest = _trim(rest)
  if (!name) {
    let idx = rest.indexOf('-')
    if (idx !== -1) {
      name = rest.slice(0, idx)
      rest = rest.slice(idx + 1)
    } else {
      keepRest = false
      let idx = rest.indexOf(' ')
      if (idx !== -1) {
        name = rest.slice(0, idx)
        rest = rest.slice(idx + 1)
      } else {
        name = rest
        rest = ''
      }
    }
  } else {
    let idx = rest.indexOf('-')
    if (idx !== -1) {
      rest = rest.slice(idx + 1)
    } else {
      keepRest = false
      let idx = rest.indexOf(' ')
      if (idx !== -1) {
        rest = rest.slice(idx + 1)
      } else {
        rest = ''
      }
    }
  }
  rest = _trim(rest)
  if (rest.length === 0 && !keepRest) {
    return false
  }

  name = name ? ' ' + _trim(name) : ''
  rest = rest ? ' - ' + rest : ''
  var tagPart = '- **' + tagName + '**'
  var typePart = type ? ' (*' + type + '*)' : ''
  return tagPart + typePart + name + rest
}
