import {
  cloneObject,
  generateRandomId,
  getArrayItemIndexById,
  getArrayItemById
} from './helpers'

describe('Helpers', () => {
  test('cloneObject', () => {
    const obj = { hello: 'hello', world: 'world' }
    const clone = cloneObject(obj)

    expect(typeof clone).toBe('object')
    expect(clone == obj).toBe(false)
  })

  test('generateRandomId', () => {
    for (let i = 0; i < 1000; i++) {
      const id = generateRandomId()

      expect(typeof id).toBe('string')
      expect(id.length).toBe(12)
    }
  })

  test('getArrayItemIndexById', () => {
    const arr = [{ id: '0' }, { id: '1' }, { id: '2' }]

    let index = getArrayItemIndexById(1, arr)
    expect(index).toBe(false)

    index = getArrayItemIndexById('1', arr)
    expect(index).toBe(1)
  })

  test('getArrayItemById', () => {
    const arr = [{ id: '0' }, { id: '1' }, { id: '2' }]

    let item = getArrayItemById(1, arr)
    expect(item).toBe(false)

    item = getArrayItemById('1', arr)
    expect(JSON.stringify(item)).toBe(JSON.stringify(arr[1]))
  })
})
