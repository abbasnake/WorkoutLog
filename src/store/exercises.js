import { writable } from 'svelte/store'
import { cloneObject, generateRandomId } from '../utils/helpers'
import Storage from '../utils/storage'

// probably need to add the routines and make the derived here as well
const exercisesStore = () => {
  const { subscribe, update } = writable([])

  const addExercise = name => {
    update(exercises => {
      const clone = cloneObject(exercises)
      const id = generateRandomId()

      clone.push({ id, name })

      Storage.saveExercises(clone)

      return clone
    })
  }

  const deleteExercise = id => {
    update(exercises => {
      const clone = cloneObject(exercises)
      const index = clone.findIndex(exercise => exercise.id === id)

      clone.splice(index, 1)

      Storage.saveExercises(clone)

      return clone
    })
  }

  const editExercise = (id, newData) => {
    update(exercises => {
      const clone = cloneObject(exercises)
      const index = clone.findIndex(exercise => exercise.id === id)

      clone[index] = { ...clone[index], ...newData }

      Storage.saveExercises(clone)

      return clone
    })
  }

  const loadExercises = () => {
    update(() => Storage.loadExercises())
  }

  return {
    subscribe,
    addExercise,
    deleteExercise,
    editExercise,
    loadExercises
  }
}

export default exercisesStore()
