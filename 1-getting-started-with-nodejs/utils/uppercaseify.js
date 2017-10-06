module.exports = (value) => {
  if(typeof value !== 'string')
    throw new Error('Value must be a string')

  return value.toUpperCase()
}