import { writable } from 'svelte/store'
import Actions from './actionsExercises'

const initialState = {
  exercises: [],
  routines: []
}

const exercisesStore = () => {
  const { subscribe, update } = writable(initialState)

  const loadExercises = () => update(state => Actions.loadExercises(state))
  const addExercise = data => update(state => Actions.addExercise(state, data))
  const deleteExercise = data =>
    update(state => Actions.deleteExercise(state, data))
  const editExercise = data =>
    update(state => Actions.editExercise(state, data))

  const loadRoutines = () => update(state => Actions.loadRoutines(state))
  const addRoutine = data => update(state => Actions.addRoutine(state, data))
  const deleteRoutine = data =>
    update(state => Actions.deleteRoutine(state, data))
  const addExerciseToRoutine = data =>
    update(state => Actions.addExerciseToRoutine(state, data))
  const removeExerciseFromRoutine = data =>
    update(state => Actions.removeExerciseFromRoutine(state, data))

  return {
    subscribe,
    addExercise,
    deleteExercise,
    editExercise,
    loadExercises,
    addRoutine,
    deleteRoutine,
    addExerciseToRoutine,
    removeExerciseFromRoutine,
    loadRoutines
  }
}

export default exercisesStore()
