<script>
  import { RoutinesStore } from '../store'
</script>

<style lang="scss">
  .Routines {
    &-name {
      height: 50px;
      border: 1px solid black;
    }
  }
</style>

<div class="Routines">
  <h1>Routines</h1>
  {#each $RoutinesStore as routine (routine.id)}
    <h4 class="Routines-name">{routine.name}</h4>
  {/each}
</div>
