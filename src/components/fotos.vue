<template>
  <div>
    <h1>Catálogo de Fotos</h1>
    <div v-if="isAuthenticated">
      <ul>
        <li v-for="foto in fotos" :key="foto.id">
          <img :src="foto.urls.small" :alt="foto.alt_description" />
          <p>{{ foto.alt_description }}</p>
        </li>
      </ul>
    </div>
    <p v-else>Debes estar autenticado para ver las fotos.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";
import { useRouter } from 'vue-router';

const fotos = ref([]);
const router = useRouter();
const isAuthenticated = ref(false);

const fetchFotos = async () => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos', {
      headers: {
        Authorization: `Client-ID jFk6hRE071mFVIs0cFSNnYQ7cwG3RjkbomypS3hKi08`
      }
    });
    fotos.value = response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
};

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  user !== null && (user.role === 'admin' || user.role === 'user');
  isAuthenticated.value = user
  if (isAuthenticated.value) {
    fetchFotos();
  } else {
    router.push('/login');
  }
});
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
