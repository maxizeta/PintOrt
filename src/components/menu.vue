<script setup>
import fotos from "./fotos.vue"
import login from "./login.vue"
</script>

<template>
<fotos/>
<login/>
<nav>

<router-link to="/fotos">
Fotos </router-link>

<router-link to="/login">
cerrar secion </router-link>

</nav>
<routerView/>

</template>
