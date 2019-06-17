import Storage from './storage'
import initialExercises from '../exerciseList'

const EXERCISES_TEST_KEY = 'workout-log-exercises-test'

const testExercises = [
  {
    id: '0',
    name: 'Pull Up'
  },
  {
    id: '1',
    name: 'Push Up'
  },
  {
    id: '2',
    name: 'Diamon Push Up'
  }
]

console.table = jest.fn()
console.group = jest.fn()
console.groupCollapsed = jest.fn()

beforeEach(() => localStorage.removeItem(EXERCISES_TEST_KEY))

describe('Storage', () => {
  it('Loads default data if no key is present', () => {
    const data = Storage.loadExercises(EXERCISES_TEST_KEY)

    expect(JSON.stringify(data)).toBe(JSON.stringify(initialExercises))
  })

  it('Saves/loads exercises correctly', () => {
    Storage.saveExercises(testExercises, EXERCISES_TEST_KEY)
    const data = Storage.loadExercises(EXERCISES_TEST_KEY)

    expect(JSON.stringify(data)).toBe(JSON.stringify(testExercises))
  })
})
