<template>
    <div>
        <div class="container">
            <input id= "input" type="text" placeholder="Eintrag eingeben"  v-model="in_eintrag" >
            <button @click="add()">Hinzufügen</button>
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
</template>

<script>

let listeGlobal= []; 

export default {
  
  components: {
   
  },

  data: function(){
    return{
      in_eintrag: '',
      eintrag: '',
      liste: listeGlobal,
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
        
        listeGlobal.push({name: this.in_eintrag});
        this.in_eintrag= '';  

      }
        
    }

   /* löschen(index)
    {
      this.liste.splice(index, 1);
    },*/

  
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
    -webkit-box-shadow: 2px 0px 17px -1px rgba(1,1,49,0.43);

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
  }

    ul li:hover::after
    {
    content: 'löschen';
    color:red;
    margin-left: 20px;

    }
    .eintragliste
    {
    height: 350px;
    overflow: auto;
    }

</style>