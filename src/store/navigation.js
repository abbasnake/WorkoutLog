import { writable } from 'svelte/store'
import { EXERCISES_ROUTE } from '../utils/constants'

const navigationStore = () => {
  const { subscribe, update } = writable({ name: EXERCISES_ROUTE, data: null })

  const navigateTo = (name, data = null) => {
    update(() => ({ name, data }))
  }

  return {
    subscribe,
    navigateTo
  }
}

export default navigationStore()
