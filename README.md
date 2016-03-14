[![Build Status](https://travis-ci.org/vigour-io/jsdoc2md.svg?branch=master)](https://travis-ci.org/vigour-io/jsdoc2md)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/vigour-jsdoc2md.svg)](https://badge.fury.io/js/vigour-jsdoc2md)

# jsdoc2md
Converts jsdoc comment blocks to markdown

`npm i vigour-jsdoc2md`

## usage

```javascript
var jsdoc2md = require('vigour-jsdoc2md')
jsdoc2md(`
/**
 * @id jsdoc2md
 * @function jsdoc2md
 * Converts jsdoc comment blocks to markdown
 * @param {string} jsdoc - the jsdoc comment block to convert
 * @returns {string} the resulting markdown
 */`)
```

<p align="center">↓</p>

> **function** : jsdoc2md
>
> Converts jsdoc comment blocks to markdown
>
> **param** {*string*} jsdoc - the jsdoc comment block to convert
>
> **returns** {*string*} the resulting markdown

As you can see, it's doing the conversion in a most minimalistic fashion. Except from converting `@tag` to `**tag** :` and `{type}` to `{*type*}`  and removing the comment characters, it also removes the `@id` tag, which is non-standard and only used by [vigour-doc](https://github.com/vigour-io/doc).
