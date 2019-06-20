<script>
  import Exercise from './ExercisesExercise.svelte'
  import { ExercisesStore } from '../store'
  import Logger from '../utils/logger.js'

  let input = ''

  function onClick() {
    if (input.length > 0) {
      ExercisesStore.addExercise(input)
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
  {#each $ExercisesStore as exercise (exercise.id)}
    <Exercise {exercise} />
  {/each}
  <div class="Exercises-addNew">
    <input type="text" placeholder="Add new Exercise..." bind:value={input} />
    <button on:click={onClick}>Add Exercise</button>
  </div>
</div>
