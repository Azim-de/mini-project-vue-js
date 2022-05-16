<template>
  <div id="app">
    <nav>
      <router-link to="/"></router-link> 
      <router-link to="/about"></router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  padding:0;
  margin:0;
}

.register input, .login input, .add input  {
    border: 1px solid rgb(200, 17, 17);
    margin-right: auto;
    margin-bottom: 30px;
    display: block;
    padding-left: 20px;
    height: 40px;
    width: 400px;
    margin-left: auto;
}

.font{
    margin-bottom:5rem ;
}

.register button, .login button, .add button{
    border: 1px solid rgb(200, 17, 17);
    height: 40px;
    width: 425px;
    background: rgb(200, 17, 17);
    color: white;
    cursor: pointer;
}
</style>
