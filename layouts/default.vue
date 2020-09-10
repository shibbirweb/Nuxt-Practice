<template>
  <div>
    <TheHeader @sidenavToggle="displaySideNav = !displaySideNav"/>
    <TheSidenav :show="displaySideNav" @close="displaySideNav = false"/>
    <Nuxt />
  </div>
</template>

<script>
  export default {
    data(){
      return {
        displaySideNav: false
      }
    }
  }
</script>

<style>
  html{
    font-family: 'Open Sans', sans-serif;
  }
  body{
    margin: 0;
  }
</style>
