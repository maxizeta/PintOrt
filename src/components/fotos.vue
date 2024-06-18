<template>

    <h1>Catalogo de fotos</h1>
    <ul>
        <li v-for="foto in fotos" :key="foto.id">
         {{foto}}
        </li>
    </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from "axios"

const fotos = ref([])
const fetchfotos = async () => {
  const response = await axios.get('')
  fotos.value = response.data
}

onMounted(fetchfotos)

</script>
