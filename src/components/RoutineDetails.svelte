<script>
  import { NavigationStore, ExercisesStore } from '../store'
  import { ROUTINES_ROUTE } from '../utils/constants.js'
  import Logger from '../utils/logger'

  let exerciseId = ''
  const { data: routineId } = $NavigationStore
  $: routine = setupRoutine($ExercisesStore)

  function addExerciseToRoutine() {
    if (exerciseId) {
      ExercisesStore.addExerciseToRoutine({ routineId, exerciseId })
    } else {
      Logger.warn(
        'components -> RoutineDetails',
        'an exercise has to be selected'
      )
    }
  }

  function removeExerciseFromRoutine(exerciseId, exerciseIndex) {
    ExercisesStore.removeExerciseFromRoutine({
      routineId,
      exerciseId,
      exerciseIndex
    })
  }

  function deleteRoutine() {
    NavigationStore.navigateTo(ROUTINES_ROUTE)
    ExercisesStore.deleteRoutine({ routineId })
  }

  function setupRoutine(store) {
    return ExercisesStore.getRoutineById(routineId)
  }
</script>

<div>
  <h1>{routine.name}</h1>
  {#each routine.exercises as exercise (exercise.index)}
    <div>
       {exercise.index + 1} - {exercise.name} - {exercise.setsReps[0]}x{exercise.setsReps[1]}

      <button
        on:click={() => removeExerciseFromRoutine(exercise.id, exercise.index)}>
        X
      </button>
    </div>
  {/each}
  <br />
  <select on:change={e => (exerciseId = e.target.value)}>
    <option value="" disabled selected>Add exercise</option>
    {#each $ExercisesStore.exercises as exercise (exercise.id)}
      <option value={exercise.id}>{exercise.name}</option>
    {/each}
  </select>
  <button on:click={addExerciseToRoutine}>Add Exercise To Routine</button>
  <br />
  <br />
  <button on:click={deleteRoutine}>Delete Routine</button>
</div>
