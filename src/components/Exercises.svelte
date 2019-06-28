<script>
  import Exercise from './ExercisesExercise.svelte'
  import { WorkoutStore } from '../store'
  import Logger from '../utils/logger.js'

  let input = ''

  function onClick() {
    if (input.length > 0) {
      WorkoutStore.addExercise({ name: input })
      input = ''
    } else {
      Logger.warn('components -> Exercises', 'input cannot be empty')
    }
  }
</script>

<style lang="scss">
  .Exercises {
    flex: 1;

    &-addNew {
      margin: 10px 0;
      height: 40px;

      input {
        height: 100%;
        width: 70%;
      }
    }
  }
</style>

<div class="Exercises">
  <h1>exercises</h1>
  {#each $WorkoutStore.exercises as exercise (exercise.id)}
    <Exercise {exercise} />
  {/each}
  <div class="Exercises-addNew">
    <input type="text" placeholder="Add new Exercise..." bind:value={input} />
    <button on:click={onClick}>Add Exercise</button>
  </div>
</div>
