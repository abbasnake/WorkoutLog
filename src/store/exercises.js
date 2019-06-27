import { writable, get, derived } from 'svelte/store'
import Actions from './actionsExercises'

const exercisesStore = () => {
  const initialState = {
    exercises: [],
    routines: []
  }
  const store = writable(initialState)
  const { subscribe, update } = store

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
  const getRoutineById = id => Actions.getRoutineById(get(store), { id })

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
    loadRoutines,
    getRoutineById
  }
}

export default exercisesStore()
