
const builder = require('./builder')

test('builder should return a new object with a name', () => {
  const expected = "Kyle"
  const actual = builder.build().name
  expect(actual).toEqual(expected)
})