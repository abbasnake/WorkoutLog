<script>
  import { ExercisesStore, NavigationStore } from '../store'
  import { ROUTINE_DETAILS_ROUTE } from '../utils/constants'
  import Logger from '../utils/logger.js'

  let input = ''

  function onClick() {
    if (input.length > 0) {
      ExercisesStore.addRoutine({ name: input })
      input = ''
    } else {
      Logger.warn('components -> Routines', 'input cannot be empty')
    }
  }
</script>

<style lang="scss">
  .Routines {
    &-routine {
      height: 50px;
      border: 1px solid black;
      display: flex;
      align-items: center;
      padding: 0 20px;

      h4 {
        flex: 5;
      }

      button {
        flex: 1;
        height: 60%;
      }
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
    <div class="Routines-routine">
      <h4> {routine.name} </h4>
      <button
        on:click={() => NavigationStore.navigateTo(ROUTINE_DETAILS_ROUTE, routine.id)}>
        >
      </button>
    </div>
  {/each}
  <div class="Routines-addNew">
    <input type="text" placeholder="Add new Routine..." bind:value={input} />
    <button on:click={onClick}>Add Routine</button>
  </div>
</div>
