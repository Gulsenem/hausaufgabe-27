<template>
  <div class="einkaufliste">
    <div class="wrapper">
      <h1>Einkaufsliste</h1>
      <div class="container">
          <input type="text" placeholder="Eintrag eingeben">
          <button >Hinzufügen</button>
          <hr>
        
          <ul>
            <li>Milch</li>
            <li>Apfel</li>
            <li>Brot (4 Brötchen)</li>
          </ul>
      </div>
    </div>

    
  </div>
</template>

<style >
  h1
  {
    margin:0;
    padding-top: 50px;
  }
  h1::after
  {
    content: "";
    width: 150px;
    height: 4px;
    margin-top: 10px;
    background-color: #009ee3;
    display: block;
  }


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

  .eintragliste
  {
    overflow: auto;
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
  .eintragliste
{
  height: 350px;
  overflow: auto;
}

ul li:hover::after
{
  content: 'löschen';
  color:red;
  margin-left: 20px;

}
</style>