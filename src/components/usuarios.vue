<template>
    <h2 class="mt-4">datos usuario</h2>
  <div class="card">
    <div class="card-body">
    <h3>usuario</h3>
    <p class="card-text">Nombre: {{ usuario.Nombre }}</p>
    <p class="card-text">contra: {{ usuario.contra }}</p>
  </div>
</div>

</template>

<script setup>
import login from "./login.vue"

    const propiedades = ({
        usuario: {
            type: Object,
            required: true
        }
        
    })
</script>
