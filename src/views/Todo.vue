<template>
  <div class="todo">
    <div class="wrapper">
      <h1>To-Do Liste</h1>
      <div class="container">
        <input id= "input" type="text" placeholder="Eintrag eingeben" v-model="in_eintrag">
        <button @click="add">Hinzufügen</button>
        <hr>
        <div class="eintragliste">
          <ul>
            <li v-for="(l, i) in liste" :key='i' @click="löschen(i)">  
              
              {{l.name}}
            </li>

          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'todo',
  components: {
   
  },

  data: function(){
    return{
      in_eintrag: '',
      eintrag: '',
      liste: [],
    }
  },

  methods:
  {
    add()
    {
      if(this.in_eintrag=='')
      {
        document.getElementById('input').style.borderColor = 'red';
        document.getElementById('input').placeholder = 'Bitte etwas eingeben';
      }
      else
      {
        document.getElementById('input').placeholder = 'Eintrag  eingeben';
        document.getElementById('input').style.borderColor = 'black';
        this.liste.push({name: this.in_eintrag});
        this.in_eintrag= '';        
      }

    },

    löschen(index)
    {
      this.liste.splice(index, 1);
    },

  
  }
}
</script>

