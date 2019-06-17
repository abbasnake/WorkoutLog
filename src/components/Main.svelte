<script>
  import Exercises from './Exercises.svelte'
  import Routines from './Routines.svelte'
  import ExerciseDetails from './ExerciseDetails.svelte'
  import { NavigationStore } from '../store'
  import {
    EXERCISES_ROUTE,
    ROUTINES_ROUTE,
    EXERCISE_DETAILS_ROUTE
  } from '../utils/constants'
</script>

<style>
  .Main {
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
  }
</style>

<main class="Main">
  {#if $NavigationStore.name === EXERCISES_ROUTE}
    <Exercises />
  {:else if $NavigationStore.name === EXERCISE_DETAILS_ROUTE}
    <ExerciseDetails />
  {:else if $NavigationStore.name === ROUTINES_ROUTE}
    <Routines />
  {/if}
</main>
