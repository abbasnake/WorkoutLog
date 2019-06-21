import {
  cloneObject,
  generateRandomId,
  getArrayItemIndexById,
  getArrayItemById
} from '../utils/helpers'
import Storage from '../utils/storage'

const actions = () => {
  const addExercise = (state, name) => {
    const id = generateRandomId()
    const exercises = state.exercises.concat({ id, name, notes: '' })

    Storage.saveExercises(exercises)

    return { ...state, exercises }
  }

  const deleteExercise = (state, id) => {
    const exercises = cloneObject(state.exercises)
    const index = getArrayItemIndexById(id, exercises)

    exercises.splice(index, 1)

    Storage.saveExercises(exercises)

    return { ...state, exercises }
  }

  const editExercise = (state, id, newData) => {
    const exercises = cloneObject(state.exercises)
    const index = getArrayItemIndexById(id, exercises)

    exercises[index] = { ...exercises[index], ...newData }

    Storage.saveExercises(exercises)

    return { ...state, exercises }
  }

  const loadExercises = state => {
    const exercises = Storage.loadExercises()

    return { ...state, exercises }
  }

  const addRoutine = (state, name) => {
    const id = generateRandomId()
    const routines = state.routines.concat({ id, name, exercises: [] })

    Storage.saveRoutines(routines)

    return { ...state, routines }
  }

  const addExerciseToRoutine = (state, routineId, exerciseId) => {
    const routines = cloneObject(state.routines)
    const exercises = cloneObject(state.exercises)
    const currentRoutineIndex = getArrayItemIndexById(routineId, routines)
    const currentExercise = getArrayItemById(exerciseId, exercises)

    routines[currentRoutineIndex].exercises.push({
      ...currentExercise,
      index: routines[currentRoutineIndex].exercises.length,
      setsReps: [3, 8]
    })

    Storage.saveRoutines(routines)

    return { ...state, routines }
  }

  const removeExerciseFromRoutine = (state, routineId, exerciseId) => {
    const routines = cloneObject(state.routines)
    const exercises = cloneObject(state.exercises)
    const currentRoutineIndex = getArrayItemIndexById(routineId, routines)
    const currentExerciseIndex = getArrayItemIndexById(exerciseId, exercises)

    routines[currentRoutineIndex].exercises.splice(currentExerciseIndex, 1)

    Storage.saveRoutines(routines)

    return { ...state, routines }
  }

  const loadRoutines = state => {
    const routines = Storage.loadRoutines()

    return { ...state, routines }
  }

  return Object.freeze({
    addExercise,
    deleteExercise,
    editExercise,
    loadExercises,
    addRoutine,
    addExerciseToRoutine,
    removeExerciseFromRoutine,
    loadRoutines
  })
}

export default actions()
