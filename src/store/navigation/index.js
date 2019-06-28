import { writable } from 'svelte/store'
import { EXERCISES_ROUTE } from '../../utils/constants'

const NavigationStore = () => {
  const initialState = { name: EXERCISES_ROUTE, data: null }
  const { subscribe, update } = writable(initialState)

  const navigateTo = (name, data = null) => {
    update(() => ({ name, data }))
  }

  return {
    subscribe,
    navigateTo
  }
}

export default NavigationStore()
