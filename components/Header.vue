<template>
  <header class="header">
    <ul class="nav-item">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users">Users</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
  .header{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cccccc;
  }
  .nav-item{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
  }
  .nav-item a {
    text-decoration: none;
    color: black;
  }

  .nav-item a:hover,
  .nav-item a:active {
    color: white;
  }
</style>

