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
  // remove leading ` * `
  jsdoc = jsdoc.replace(leadRE, '\n\n')
  // @tag -> **tag**
  jsdoc = jsdoc.replace(tagRE, tagReplace)
  // {type} -> {*type*}
  jsdoc = jsdoc.replace(typeRE, typeReplace)
  // clean up excessive new lines
  jsdoc = jsdoc.replace('\n\n\n\n', '\n\n')
  // trim white space
  return _trim(jsdoc)
}

var leadRE = new RegExp('\\n+[ \\t]*\\*[ \\t]*', 'g')

var tagRE = new RegExp('@([a-z]+)', 'g')
function tagReplace (match, group) {
  return '**' + group + '**'
}

var typeRE = new RegExp('{([a-zA-Z]+)}', 'g')
function typeReplace (match, group) {
  return '{*' + group + '*}'
}
