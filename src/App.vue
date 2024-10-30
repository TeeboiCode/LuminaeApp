<template>
  <div>
    <nav>
      <router-link to="/admin">Admin Home</router-link>
      |
      <router-link to="/">App Home</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
