import { writable } from 'svelte/store'
import initialRoutines from '../utils/routineList'
import { cloneObject, generateRandomId } from '../utils/helpers'

const routinesStore = () => {
  const { subscribe, update } = writable(initialRoutines)

  const addRoutine = name => {
    update(routines => {
      const clone = cloneObject(routines)
      const id = generateRandomId()

      clone.push({ id, name, exercises: [] })

      return clone
    })
  }

  // probably need exercise list and get exercise by ID
  const addExerciseToRoutine = (routineId, name) => {
    update(routines => {
      const clone = cloneObject(routines)
      const id = generateRandomId()
      const correctRoutine = clone.find(routine => routine.id === routineId)

      correctRoutine.exercises.push({
        id,
        name,
        index: correctRoutine.exercises.length
      })

      return clone
    })
  }

  return {
    subscribe,
    addRoutine,
    addExerciseToRoutine
  }
}

export default routinesStore()
