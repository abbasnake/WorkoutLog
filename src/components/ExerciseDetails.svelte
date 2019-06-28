<script>
  import { WorkoutStore, NavigationStore } from '../store'
  import { EXERCISES_ROUTE } from '../utils/constants'

  let {
    data: { id, name, notes }
  } = $NavigationStore
  let isEditMode = false

  function editSaveExercise() {
    if (isEditMode) {
      WorkoutStore.editExercise({ id, newData: { name, notes } })
    }
    isEditMode = !isEditMode
  }
  function goBack() {
    NavigationStore.navigateTo(EXERCISES_ROUTE)
  }

  function deleteExercise() {
    WorkoutStore.deleteExercise({ id })
    goBack()
  }
</script>

<style lang="scss">
  .ExerciseDetails {
    padding: 10px;
  }
</style>

<div class="ExerciseDetails">
  {#if isEditMode}
    <input type="text" bind:value={name} />
  {:else}
    <h4>{name}</h4>
  {/if}
  <h4>Notes</h4>
  {#if isEditMode}
    <p>
      <textarea bind:value={notes} />
    </p>
  {:else}
    <p>{notes}</p>
  {/if}
  <button on:click={goBack}>Back</button>
  <button on:click={editSaveExercise}> {isEditMode ? 'Save' : 'Edit'} </button>
  <button on:click={deleteExercise}>Delete</button>
</div>
