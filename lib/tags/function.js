'use strict'

var _trim = require('lodash.trim')

module.exports = exports = function convertFunction (line, i, lines, tagName, type, rest) {
  if (!rest) {
    return false
  }
  var start = '#### '
  var params = []
  var returnPart = ''
  lines.map((item) => {
    var param = item.match(getParam)
    if (param && param[1]) {
      params.push(param[1])
    } else {
      var returns = item.match(getReturns)
      if (returns) {
        if (returns[1]) {
          returnPart = 'var *' + returns[1] + '* = '
        }
        if (returns[2]) {
          returnPart = 'var ' + returns[2] + ' = '
        }
      }
    }
  })
  var newLine = _trim(start + returnPart + rest + '(' + params.join(', ') + ')')
  return newLine
}

var getParam = /(?:(?:@param)|(?:@arg(?:ument)?))[ \t]+(?:{[a-zA-Z]+}[ \t]*)?([a-zA-Z0-9$_]+)/
var getReturns = /@returns?[ \t]+(?:{([a-zA-Z]+)}[ \t]*)?([a-zA-Z0-9$_]+)?/
