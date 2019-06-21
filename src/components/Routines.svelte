<script>
  import { ExercisesStore, NavigationStore } from '../store'
  import { ROUTINE_DETAILS_ROUTE } from '../utils/constants'
  import Logger from '../utils/logger.js'

  let input = ''

  function onClick() {
    if (input.length > 0) {
      ExercisesStore.addRoutine(input)
      input = ''
    } else {
      Logger.warn('components -> Routines', 'input cannot be empty')
    }
  }
</script>

<style lang="scss">
  .Routines {
    &-name {
      height: 50px;
      border: 1px solid black;
    }

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

<div class="Routines">
  <h1>Routines</h1>
  {#each $ExercisesStore.routines as routine (routine.id)}
    <h4
      class="Routines-name"
      on:click={() => NavigationStore.navigateTo(ROUTINE_DETAILS_ROUTE, routine.id)}>
       {routine.name}
    </h4>
  {/each}
  <div class="Routines-addNew">
    <input type="text" placeholder="Add new Routine..." bind:value={input} />
    <button on:click={onClick}>Add Routine</button>
  </div>
</div>
