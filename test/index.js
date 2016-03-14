'use strict'

var test = require('tape')

var jsdoc2md = require('../')

var testCases = [
  [
    `/**
 * @id jsdoc2md
 * @function jsdoc2md
 * Converts jsdoc comment blocks to markdown
 * @param {string} jsdoc - the jsdoc comment block to convert
 * @returns {string} the resulting markdown
 */`,
    `**id** jsdoc2md

**function** jsdoc2md

Converts jsdoc comment blocks to markdown

**param** {*string*} jsdoc - the jsdoc comment block to convert

**returns** {*string*} the resulting markdown`
  ],
  [
    `/**
\t*\tCreates an instance of Circle.
\t*\t
\t*\t@constructor
\t*\t@this {Circle}
\t*\t@param {number} r The desired radius of the circle.
\t*/`,
    `Creates an instance of Circle.

**constructor**

**this** {*Circle*}

**param** {*number*} r The desired radius of the circle.`
  ]
]
var len = testCases.length

test('jsdoc2md', function (t) {
  t.plan(len)
  for (let i = 0; i < len; i += 1) {
    t.equals(jsdoc2md(testCases[i][0]),
      testCases[i][1],
      'jsdoc2md(' + testCases[i][0] + ') === ' + testCases[i][1]
    )
  }
})
