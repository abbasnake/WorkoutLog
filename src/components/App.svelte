<script>
  import Header from './Header.svelte'
  import Main from './Main.svelte'
  import Footer from './Footer.svelte'
  import { ExercisesStore } from '../store'
  import { onMount } from 'svelte'

  onMount(() => ExercisesStore.loadExercises())
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
