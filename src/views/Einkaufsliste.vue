<template>
  <div class="einkaufliste">
    <div class="wrapper">
      <h1>Einkaufsliste</h1>

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
