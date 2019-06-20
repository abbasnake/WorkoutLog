<script>
  import Header from './Header.svelte'
  import Main from './Main.svelte'
  import Footer from './Footer.svelte'
  import { ExercisesStore, RoutinesStore } from '../store'
  import { onMount } from 'svelte'

  onMount(() => {
    ExercisesStore.loadExercises()
    RoutinesStore.loadRoutines()
  })
</script>

<style>
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

<div id="app">
  <Header />
  <Main />
  <Footer />
</div>
