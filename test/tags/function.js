'use strict'

var test = require('tape')
var convertFunction = require('../../lib/tags/function')
var jsdoc2md = require('../../')

test('convertFunction', function (t) {
  var testCases = [
    // 0
    [
      [' * @function boom',
        ' * @param power',
        ' * @param {string} force',
        ' * @arg energy Something',
        ' * @param strength - something',
        ' * @argument {string} radiation - something again'],
      '#### boom(power, force, energy, strength, radiation)'
    ],
    // 1
    [
      [' * @function boom',
        ' * @returns {string} desc - description of explosion'],
      '#### var desc = boom()'
    ],
    // 2
    [
      [' * @function boom',
        ' * @param radius',
        ' * @returns desc - description of explosion'],
      '#### var desc = boom(radius)'
    ],
    // 3
    [
      [' * @function boom',
        ' * @returns {string} desc -'],
      '#### var desc = boom()'
    ],
    // 4
    [
      [' * @function boom',
        ' * @returns desc'],
      '#### var desc = boom()'
    ],
    // 5
    [
      [' * @function boom',
        ' * @returns {string}'],
      '#### var *string* = boom()'
    ]
  ]
  var len = testCases.length
  t.plan(len)
  for (let i = 0; i < len; i += 1) {
    var parts = testCases[i][0][0].match(jsdoc2md.lineRE)
    var tagName = parts[3]
    var type = parts[5]
    var rest = parts[6]
    t.equals(convertFunction(testCases[i][0][0], 0, testCases[i][0], tagName, type, rest),
      testCases[i][1],
      'test case i=' + i)
  }
})
