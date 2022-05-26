#!/usr/bin/env node
const { zip } = require('../dist/gensen.umd')

console.log('gensen.js', [...zip([0, 2, 4], [1, 3])])
