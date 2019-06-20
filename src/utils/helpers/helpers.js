const cloneObject = obj => JSON.parse(JSON.stringify(obj))

const generateRandomId = () => {
  const generate = () => Math.floor(Math.random() * 8999 + 1000)
  const id = `${generate()}${generate()}${generate()}`

  return id
}

const getArrayItemIndexById = (id, object) => {
  const clone = cloneObject(object)
  const index = clone.findIndex(item => item.id === id)

  if (index === -1) return false

  return index
}

const getArrayItemById = (id, object) => {
  const clone = cloneObject(object)
  const correctItem = clone.find(item => item.id === id)

  return correctItem ? correctItem : false
}

export {
  cloneObject,
  generateRandomId,
  getArrayItemIndexById,
  getArrayItemById
}
