
const characterBuilder = require('./builder')

describe('characterBuilder', () => {
  test('should return a new object with a name', () => {
  const expected = "Kyle"

  console.log(`the builder: ${characterBuilder()}`)

  const actual = characterBuilder()
    .withName(expected)
    .build().name
  expect(actual).toEqual(expected)
})

  test('should return a new object with a different name', () => {
    const expected = "Arthur"
    const actual = characterBuilder()
      .withName(expected)
      .build().name
    expect(actual).toEqual(expected)
  })
})
