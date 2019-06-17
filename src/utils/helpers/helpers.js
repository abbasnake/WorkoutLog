const cloneObject = obj => JSON.parse(JSON.stringify(obj))

const generateRandomId = () => {
  const generate = () => Math.floor(Math.random() * 8999 + 1000)
  const id = `${generate()}${generate()}${generate()}`

  return id
}

export { cloneObject, generateRandomId }
