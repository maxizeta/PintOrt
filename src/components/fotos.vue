<template>
  <div>
    <h1>Catalogo de fotos</h1>
    <ul>
      <li v-for="foto in fotos" :key="foto.id">
        <img :src="foto.urls.small" :alt="foto.alt_description" />
        <p>{{ foto.alt_description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from "axios"

const fotos = ref([])
const fetchFotos = async () => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos', {
      headers: {
        Authorization: `Client-ID jFk6hRE071mFVIs0cFSNnYQ7cwG3RjkbomypS3hKi08`
      }
    })
    fotos.value = response.data
  } catch (error) {
    console.error('Error fetching photos:', error)
  }
}

onMounted(fetchFotos)

</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

img {
  width: 300px;
  height: auto;
  border-radius: 8px;
}
</style>