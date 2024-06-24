
<template >
    <div class="foto-card">
        <img :src="foto.imagen" :alt="foto.descripcion" class="foto-image" />
        <div class="foto-descripcion">
               <p>{{ foto.descripcion }}</p>
               
        </div>
     
    </div>
</template>
<script setup>
defineProps({
 foto: {
  type: Object,
 },
})

  

</script>

<style scoped>
  .foto-card {
    border: 1px solid #B6C7AA;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    position: relative;
    transition: box-shadow 0.3s;
    background-color: #F6E6CB
  }
  
  .foto-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .foto-image {
    max-width: 100%;
    border-radius: 8px;
  }
  
  .foto-descripcion {
    margin-top: 8px;
  }
  


</style>