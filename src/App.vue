<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/Login">Login</router-link>
  </nav>
  <router-view/>
</template>

<style>

@font-face {
  font-family: 'Lato';
  src: url('./assets/fonts/Lato/Lato-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url('./assets/fonts/Lato/Lato-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

body{
  margin:0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
