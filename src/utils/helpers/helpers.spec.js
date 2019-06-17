import * as Helpers from './helpers'

describe('Helpers', () => {
  test('cloneObject', () => {
    const obj = { hello: 'hello', world: 'world' }
    const clone = Helpers.cloneObject(obj)

    expect(typeof clone).toBe('object')
    expect(clone == obj).toBe(false)
  })

  test('generateRandomId', () => {
    for (let i = 0; i < 1000; i++) {
      const id = Helpers.generateRandomId()

      expect(typeof id).toBe('string')
      expect(id.length).toBe(12)
    }
  })
})
