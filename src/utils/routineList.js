import { generateRandomId } from '../utils/helpers'
import initialExercises from './exerciseList'

const initialRoutines = [
  {
    id: generateRandomId(),
    name: 'FFAQ-1-1',
    exercises: [
      {
        ...initialExercises[0],
        index: 0,
        setsReps: [3, 5]
      },
      {
        ...initialExercises[1],
        index: 1,
        setsReps: [3, 5]
      },
      {
        ...initialExercises[2],
        index: 2,
        setsReps: [3, 5]
      },
      {
        ...initialExercises[3],
        index: 3,
        setsReps: [3, 5]
      },
      {
        ...initialExercises[4],
        index: 4,
        setsReps: [3, 5]
      }
    ]
  },
  {
    id: generateRandomId(),
    name: 'FFAQ-1-2',
    exercises: [
      {
        ...initialExercises[6],
        index: 0,
        setsReps: [3, 5]
      },
      {
        ...initialExercises[7],
        index: 1,
        setsReps: [3, 5]
      },
      {
        ...initialExercises[4],
        index: 2,
        setsReps: [3, 5]
      },
      {
        ...initialExercises[1],
        index: 3,
        setsReps: [3, 5]
      },
      {
        ...initialExercises[4],
        index: 4,
        setsReps: [3, 5]
      },
      {
        ...initialExercises[5],
        index: 5,
        setsReps: [3, 5]
      }
    ]
  }
]

export default initialRoutines
