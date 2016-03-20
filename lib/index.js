'use strict'

var _trim = require('lodash.trim')

/**
 * @id jsdoc2md
 * @function jsdoc2md
 * Converts jsdoc comment blocks to markdown
 * @param {string} jsdoc - the jsdoc comment block to convert
 * @returns {string} the resulting markdown
 */
module.exports = exports = function (jsdoc) {
  // remove comment block start
  jsdoc = jsdoc.replace('/**', '')
  // remove comment block end
  jsdoc = jsdoc.replace('*/', '')
  jsdoc = jsdoc.split('\n')
    .map(convertLine)
    .filter((item) => {
      return !!item
    })
    .join('\n')
  // trim white space
  return _trim(jsdoc)
}

exports.lineRE = /([ \t]*\*[ \t]*)(@([a-zA-Z]+)[ \t]*)?({([a-zA-Z]+)}[ \t]*)?(.*)/

var func = require('./tags/function')
var property = require('./tags/property')
var returns = require('./tags/returns')
var tags = {
  id: require('./tags/id'),
  'function': func,
  func: func,
  method: func,
  property: property,
  prop: property,
  other: require('./tags/other'),
  returns: returns,
  'return': returns
}

function convertLine (line, i, lines) {
  if (line === '') {
    return false
  }
  var parts = line.match(exports.lineRE)
  if (!parts) {
    return '\n' + line
  }
  var tagName = parts[3]
  var type = parts[5]
  var rest = parts[6]
  if (tagName) {
    // Using `hasOwnProperty` instead of just `if (tags[tagname])`
    // because jsdoc has a `constructor` tag and `Object.constructor` is always truthy
    if (tags.hasOwnProperty(tagName)) {
      line = tags[tagName](line, i, lines, tagName, type, rest)
    } else {
      line = tags.other(line, i, lines, tagName, type, rest)
    }
    return line
  } else {
    return '\n' + line.replace(/^[ \t]*\*[ \t]+/, '')
  }
}
