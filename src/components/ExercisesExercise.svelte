<script>
  import { ExercisesStore, NavigationStore } from '../store'
  import { EXERCISE_DETAILS_ROUTE } from '../utils/constants'

  export let exercise

  function navigateTo() {
    NavigationStore.navigateTo(EXERCISE_DETAILS_ROUTE, exercise)
  }
</script>

<style lang="scss">
  .Exercise {
    border: 1px solid black;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;

    &-name {
      flex: 5;
    }

    &-button {
      flex: 1;
      height: 60%;
    }
  }
</style>

<div class="Exercise">
  <span class="Exercise-name">{exercise.name}</span>
  <button class="Exercise-button" on:click={navigateTo}>></button>
</div>
