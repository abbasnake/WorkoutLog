<script>
  import { NavigationStore } from '../store'
  import { EXERCISES_ROUTE, ROUTINES_ROUTE } from '../utils/constants'

  function navigateTo(routeName) {
    NavigationStore.navigateTo(routeName)
  }
</script>

<style lang="scss">
  .Footer {
    height: 75px;
    background-color: grey;
    display: flex;
    justify-content: space-around;
    padding: 10px;

    &-button {
      width: 40%;
    }
  }
</style>

<footer class="Footer">
  <button class="Footer-button" on:click={() => navigateTo(EXERCISES_ROUTE)}>
    Exercises
  </button>
  <button class="Footer-button" on:click={() => navigateTo(ROUTINES_ROUTE)}>
    Routines
  </button>
</footer>
