const Logger = () => {
  const _currentTime = () => {
    const now = new Date()
    const timeString = now.toTimeString().substring(0, 8)
    const ms = now.getMilliseconds()

    return `${timeString}:${ms}`
  }

  const info = (location, info) => {
    const style = 'background-color: lightblue'

    console.group('%c   INFO   ', style)
    console.group(`%c Location: ${location} `, style, _currentTime())
    console.log(`%c ${info} `, style)
    console.groupEnd()
    console.groupEnd()
  }

  const error = (location, error) => {
    const style = 'background-color: #ffefef; color: #f00'

    console.group('%c   ERROR   ', style)
    console.group(`%c Location: ${location} `, style, _currentTime())
    console.error(error)
    console.groupEnd()
    console.groupEnd()
  }

  const warn = (location, warning) => {
    const style = 'background-color: #fffbe4; color: #917457'

    console.group('%c   WARNING   ', style)
    console.group(`%c Location: ${location} `, style, _currentTime())
    console.warn(warning)
    console.groupEnd()
    console.groupEnd()
  }

  const table = (location, title, data) => {
    const json = typeof data === 'string' ? JSON.parse(data) : data
    const style = 'background-color: lightgrey'

    console.group('%c   TABLE   ', style)
    console.group(`%c Location: ${location} `, style, _currentTime())
    console.groupCollapsed(`%c ${title}`, style)
    console.table(json)
    console.groupEnd()
    console.groupEnd()
    console.groupEnd()
  }

  return Object.freeze({
    info,
    error,
    warn,
    table
  })
}

export default Logger()
