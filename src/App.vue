<script setup>
import Navbar from './components/navbar.vue'
import router from './router/router.js'
import Footerr from './components/footer.vue'
</script>

<template>
   <div id="app" class="app-container"> 
     <Navbar />
   </div>
   <div class="content">
     <router-view />
   </div>
   <div class ="footer">
    <Footerr/>
   </div>
    
</template>

<style scoped>
/* body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #ff1212;
  color: #333;
} */


html, body {
  height: 100%;
  margin: 0;
  background-color: #f5f5f5; 
  font-family: Arial, sans-serif;
}

#app {
  /* min-height: 100vh;  */
  display: flex;
  text-align: center;
  flex-direction: column;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  align-items: center;
}

.content {
  flex-grow: 1; 
  background-color: #A0937D; 
  padding: 20px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 20px;
  width: 100%;
  max-width: 1130px; 
}

.footer {
  background-color: #A0937D;
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-top: 2px solid #444;
  width: 100%;
}

@media (min-width: 768px) {
  .content {
    padding: 40px;
    margin: 40px;
  }
}



</style>



