import { generateRandomId, getArrayItemById } from '../utils/helpers'
import Storage from '../utils/storage'

const actions = () => {
  const _exerciseTemplate = name => ({
    id: generateRandomId(),
    name,
    notes: ''
  })

  const _routineTemplate = name => ({
    id: generateRandomId(),
    name,
    exercises: []
  })

  const addExercise = (state, { name }) => {
    const exercises = state.exercises.concat(_exerciseTemplate(name))

    Storage.saveExercises(exercises)

    return { ...state, exercises }
  }

  const deleteExercise = (state, { id }) => {
    const exercises = state.exercises.filter(exercise => exercise.id !== id)

    Storage.saveExercises(exercises)

    return { ...state, exercises }
  }

  const editExercise = (state, { id, newData }) => {
    const exercises = state.exercises.map(exercise =>
      exercise.id === id ? { ...exercise, ...newData } : exercise
    )

    Storage.saveExercises(exercises)

    return { ...state, exercises }
  }

  const loadExercises = state => {
    const exercises = Storage.loadExercises()

    return { ...state, exercises }
  }

  const addRoutine = (state, { name }) => {
    const routines = state.routines.concat(_routineTemplate(name))

    Storage.saveRoutines(routines)

    return { ...state, routines }
  }

  const deleteRoutine = (state, { routineId }) => {
    const routines = state.routines.filter(routine => routine.id !== routineId)

    Storage.saveRoutines(routines)

    return { ...state, routines }
  }

  const addExerciseToRoutine = (state, { routineId, exerciseId }) => {
    const routines = state.routines.map(routine => {
      if (routine.id === routineId) {
        const newExercise = {
          id: exerciseId,
          index: routine.exercises.length,
          setsReps: [3, 8]
        }
        const exercises = [...routine.exercises, newExercise]

        return { ...routine, exercises }
      }

      return routine
    })

    Storage.saveRoutines(routines)

    return { ...state, routines }
  }

  const removeExerciseFromRoutine = (
    state,
    { routineId, exerciseId, exerciseIndex }
  ) => {
    const routines = state.routines.map(routine => {
      if (routine.id === routineId) {
        const exercises = routine.exercises
          .filter(
            exercise =>
              exercise.id !== exerciseId || exercise.index !== exerciseIndex
          )
          .map((exercise, index) => ({ ...exercise, index }))

        return { ...routine, exercises }
      }

      return routine
    })

    Storage.saveRoutines(routines)

    return { ...state, routines }
  }

  const loadRoutines = state => {
    const routines = Storage.loadRoutines()

    return { ...state, routines }
  }

  const getRoutineById = (state, { id }) => {
    const routine = getArrayItemById(id, state.routines)
    const exercises = routine.exercises.map(exercise => {
      const details = getArrayItemById(exercise.id, state.exercises)

      return { ...exercise, ...details }
    })

    return { ...routine, exercises }
  }

  return Object.freeze({
    addExercise,
    deleteExercise,
    editExercise,
    loadExercises,
    addRoutine,
    deleteRoutine,
    addExerciseToRoutine,
    removeExerciseFromRoutine,
    loadRoutines,
    getRoutineById
  })
}

export default actions()
