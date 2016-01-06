
const test = require('tape')
const {{basename}} = require('.')

const skip = false

test('sample', {skip:skip}, function (t) {

  t.deepEqual('sample'.length, 6)

  t.end()
})
