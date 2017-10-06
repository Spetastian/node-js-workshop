function magicFunc({ foo, bar = 'defaultBar' }) {
  if(!foo)
    throw new Error('Foo is needed!')

  console.log(foo, bar)
}

magicFunc({ foo: 'Hello', bar: 'World' })
magicFunc({ foo: 'Hey you' })

const foo = 'Oi'
const bar = 'Hey'

magicFunc({ foo, bar })