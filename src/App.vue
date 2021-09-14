<template>
  <div id="app">
    <header>
      <div class="wrapper flex" >
        <div class="logo">
          Meine Webseite
        </div>
        <div id="nav">
          <router-link to="/" >To-Do's</router-link> 
          <router-link to="/Einkaufsliste" >Einkaufsliste</router-link>
        </div>

      </div>


    </header>

    <router-view/>
  </div>
</template>

<style>

*
{
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body
{
  margin:0;
  height: 100vh;
  background-color: #d8d8d4;
}

header
{
  background-color: #0f1e37;
  padding: 15px 0;
}
.wrapper
{
  max-width: 1100px;
  margin-left: auto;
  margin-right:auto;
  padding: 0 50px;
}

.flex
{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a
{
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  margin-left: 20px;
  padding: 5px;
}
#nav a.router-link-exact-active
{
  border-bottom: 3px solid #009ee3;
}
.logo
{
  color:white;
  font-weight: bold;
  font-size: 2.5em;
}

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

</style>

