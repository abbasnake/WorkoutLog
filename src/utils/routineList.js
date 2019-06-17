import { generateRandomId } from '../utils/helpers'
import initialExercises from './exerciseList'

const initialRoutines = [
  {
    id: generateRandomId(),
    name: 'FFAQ-1-1',
    exercises: [
      {
        ...initialExercises[0],
        index: 0
      },
      {
        ...initialExercises[1],
        index: 1
      },
      {
        ...initialExercises[2],
        index: 2
      },
      {
        ...initialExercises[3],
        index: 3
      },
      {
        ...initialExercises[4],
        index: 4
      }
    ]
  },
  {
    id: generateRandomId(),
    name: 'FFAQ-1-2',
    exercises: [
      {
        ...initialExercises[6],
        index: 0
      },
      {
        ...initialExercises[7],
        index: 1
      },
      {
        ...initialExercises[4],
        index: 2
      },
      {
        ...initialExercises[1],
        index: 3
      },
      {
        ...initialExercises[4],
        index: 4
      },
      {
        ...initialExercises[5],
        index: 5
      }
    ]
  }
]

export default initialRoutines
