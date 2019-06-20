import { writable } from 'svelte/store'
import initialRoutines from '../utils/routineList'
import { cloneObject, generateRandomId } from '../utils/helpers'
import Storage from '../utils/storage'

const routinesStore = () => {
  const { subscribe, update } = writable(initialRoutines)

  const addRoutine = name => {
    update(routines => {
      const clone = cloneObject(routines)
      const id = generateRandomId()

      clone.push({ id, name, exercises: [] })

      Storage.saveRoutines(clone)

      return clone
    })
  }

  // probably need exercise list and get exercise by ID
  const addExerciseToRoutine = (routineId, exercise) => {
    update(routines => {
      const clone = cloneObject(routines)
      const currentRoutine = clone.find(routine => routine.id === routineId)

      currentRoutine.exercises.push({
        ...exercise,
        index: currentRoutine.exercises.length,
        setsReps: [3, 8]
      })

      Storage.saveRoutines(clone)

      return clone
    })
  }

  const loadRoutines = () => {
    update(() => Storage.loadRoutines())
  }

  return {
    subscribe,
    loadRoutines,
    addRoutine,
    addExerciseToRoutine
  }
}

export default routinesStore()
