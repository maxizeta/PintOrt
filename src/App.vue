<script setup>
import Navbar from './components/navbar.vue'
import router from './router/router.js'
import Footerr from './components/footer.vue'
</script>

<template>
    <Navbar />
    <router-view />
    <Footerr />
</template>

<style scoped>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #ff1212;
  color: #333;
}




</style>
