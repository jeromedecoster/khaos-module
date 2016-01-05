
const test = require('tape')
const {{name}} = require('.')

const skip = false

test('sample', {skip:skip}, function (t) {

  t.deepEqual('sample'.length, 6)

  t.end()
})
