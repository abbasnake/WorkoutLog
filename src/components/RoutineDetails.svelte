<script>
  import { NavigationStore, ExercisesStore, RoutinesStore } from '../store'
  import { cloneObject } from '../utils/helpers'

  let selectValue = ''
  const { data: routineId } = $NavigationStore
  $: routine = cloneObject($RoutinesStore.find(item => item.id === routineId))

  function addExerciseToRoutine() {
    const exercise = getExerciseById()

    if (exercise) {
      RoutinesStore.addExerciseToRoutine(routine.id, exercise)
    }
  }

  function getExerciseById() {
    const clone = cloneObject($ExercisesStore)
    const currentExercise = clone.find(exercise => exercise.id === selectValue)

    return currentExercise
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
    {#each $ExercisesStore as exercise (exercise.id)}
      <option value={exercise.id}>{exercise.name}</option>
    {/each}
  </select>
  <button on:click={addExerciseToRoutine}>Add Exercise To Routine</button>
</div>
