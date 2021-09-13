<template>
  <div class="todo">
    <div class="wrapper">
      <h1>To-Do Liste</h1>
       <Liste /> 
    </div>
  </div>
</template>

<script>

import Liste from './Liste.vue'
export default {
  components:
  {
    Liste
  }
}
</script>

