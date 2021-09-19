<template>
    <div>
        <div class="container">
            
          <input  type="text" :placeholder="placeholder"  v-model="in_eintrag">
          <button  @click="add()" > 
              {{btn}} 
          </button>
            <hr>
          <div class="eintragliste">
          <ul>
              <li v-for="(l, i) in liste" :key='i'  

                  :class="{active: zeigen === i}"
                  @mouseover="zeigen = i"
                  @mouseleave="zeigen = false"> 

                  {{l.name}}

                  <span v-if="zeigen ===i" @click="löschen(i)"> löschen</span>
              </li>

          </ul>
          </div>
      </div>
    </div>
</template>

<script>


export default {

  data: function(){
    return{
      in_eintrag: '',
      placeholder: "Eintrag eingeben",
      zeigen: true,
      btn: "Hinzufügen",
      liste: [],
    }
  },

  methods:
  {

    add()
    {

      if(this.in_eintrag=='')
      {
        this.placeholder ="Bitte geben sie etwas"
      }
      else
      {
        this.placeholder ="Eintrag eingeben";
        
        
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


<style >


  .container
  {
    height: 500px;
    background-color: white;
    margin-top: 30px;
    padding: 40px 70px;
    border-radius: 8px;
    box-shadow: 2px 0px 17px -1px rgba(1,1,49,0.43);

  }

  input, button
  {
      padding: 8px 20px;
      border-radius: 8px;
      border: 1px solid rgb(70, 69, 69);
      margin-bottom: 10px;
      outline:none;
      font-size: 1.1em;
  }

  button
  {
    cursor:pointer;
    background-color: #009ee3;
    color:white;
    font-weight: bold;
    margin-left: 20px;
    border:none;
  }
  
  ul li
  {
    font-weight: bold;
    cursor:pointer;
    padding: 4px 0;
  }
  ul li span
  {
    color:red;
    margin-left: 15px;
  }                                            
    .eintragliste
    {
    height: 350px;
    overflow: auto;
    }

</style>