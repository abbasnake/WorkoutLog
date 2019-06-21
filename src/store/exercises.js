import { writable } from 'svelte/store'
import Actions from './actionsExercises'

const initialState = {
  exercises: [],
  routines: []
}

const exercisesStore = () => {
  const { subscribe, update } = writable(initialState)

  const addExercise = name => update(state => Actions.addExercise(state, name))
  const deleteExercise = id =>
    update(state => Actions.deleteExercise(state, id))
  const editExercise = (id, newData) =>
    update(state => Actions.editExercise(state, id, newData))
  const loadExercises = () => update(state => Actions.loadExercises(state))
  const addRoutine = name => update(state => Actions.addRoutine(state, name))
  const addExerciseToRoutine = (routineId, exerciseId) =>
    update(state => Actions.addExerciseToRoutine(state, routineId, exerciseId))
  const removeExerciseFromRoutine = (routineId, exerciseId, exerciseIndex) =>
    update(state =>
      Actions.removeExerciseFromRoutine(
        state,
        routineId,
        exerciseId,
        exerciseIndex
      )
    )
  const loadRoutines = () => update(state => Actions.loadRoutines(state))

  return {
    subscribe,
    addExercise,
    deleteExercise,
    editExercise,
    loadExercises,
    addRoutine,
    addExerciseToRoutine,
    removeExerciseFromRoutine,
    loadRoutines
  }
}

export default exercisesStore()
