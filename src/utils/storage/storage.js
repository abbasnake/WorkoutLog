import initialExercises from '../exerciseList'
import Logger from '../logger'

const Storage = () => {
  const EXERCISES_KEY = 'workout-log-exercises'
  const ROUTINES_KEY = 'workout-log-routines'
  const HISTORY_KEY = 'workout-log-history'

  const _set = (key, data) => {
    const stringifiedData =
      typeof data === 'string' ? data : JSON.stringify(data)

    localStorage.setItem(key, stringifiedData)
  }

  const _get = key => {
    const data = localStorage.getItem(key)

    if (!data) {
      Logger.info('utils -> storage -> _get', `No data for ${key}`)

      return false
    }

    const parsedData = JSON.parse(data)

    Logger.table(
      'utils -> storage -> _get',
      `Loaded ${key} from DB`,
      parsedData
    )

    return parsedData
  }

  const loadExercises = (key = EXERCISES_KEY) => {
    const exercises = _get(key)

    if (!exercises) {
      saveExercises(initialExercises)

      Logger.table(
        'utils -> storage -> loadExercses',
        'No DB, loaded initialExercises',
        initialExercises
      )

      return initialExercises
    }

    return exercises
  }

  const loadRoutines = (key = ROUTINES_KEY) => {
    const routines = _get(key)

    return routines ? routines : []
  }

  const loadHistory = (key = HISTORY_KEY) => {
    const history = _get(key)

    return history ? history : []
  }

  const saveExercises = (exercises, key = EXERCISES_KEY) => _set(key, exercises)
  const saveRoutines = (routines, key = ROUTINES_KEY) => _set(key, routines)
  const saveHistory = (history, key = HISTORY_KEY) => _set(key, history)

  return Object.freeze({
    loadExercises,
    loadRoutines,
    loadHistory,
    saveExercises,
    saveRoutines,
    saveHistory
  })
}

export default Storage()
