
const characterBuilder = () => {
  const _character = {}

  return {
    withName: name => {
      _character.name = name
      return 
    },
    build: () => _character
  }
}

module.exports = characterBuilder
