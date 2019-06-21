<script>
  import { NavigationStore, ExercisesStore, RoutinesStore } from '../store'
  import { cloneObject } from '../utils/helpers'
  import Logger from '../utils/logger'

  let selectValue = ''
  const { data: routineId } = $NavigationStore
  $: routine = cloneObject(
    $ExercisesStore.routines.find(item => item.id === routineId)
  )

  function addExerciseToRoutine() {
    if (selectValue) {
      ExercisesStore.addExerciseToRoutine(routine.id, selectValue)
    } else {
      Logger.warn(
        'components -> RoutineDetails',
        'an exercise has to be selected'
      )
    }
  }
</script>

<div>
  <h1>{routine.name}</h1>
  {#each routine.exercises as exercise (exercise.index)}
    <div>
       {exercise.index + 1} - {exercise.name} - {exercise.setsReps[0]}x{exercise.setsReps[1]}

    </div>
  {/each}
  <select on:change={e => (selectValue = e.target.value)}>
    <option value="" disabled selected>Add exercise</option>
    {#each $ExercisesStore.exercises as exercise (exercise.id)}
      <option value={exercise.id}>{exercise.name}</option>
    {/each}
  </select>
  <button on:click={addExerciseToRoutine}>Add Exercise To Routine</button>
</div>
