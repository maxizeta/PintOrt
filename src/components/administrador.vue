<template>
  <div class="container">
  <h2>Lista de fotos</h2>
  <router-link to="/agregarFotoMes">Agregar foto</router-link>
  <br><br>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>Imagen</th>
        <th>Descripcion</th>
    
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="foto in fotos" :key="foto.id">
        <td>{{ foto.id }}</td>
        <td>{{ foto.imagen }}</td>
        <td>{{ foto.descripcion }}</td>
        
        <td>
          <router-link :to="{ name: 'eliminarFotoMes', params: { id:foto.id } }">Eliminar</router-link>
        </td>
      </tr>
    </tbody>
  </table>
  <router-view></router-view>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const fotos = ref([]);

const fetchFotos = async () => {
try {
  const response = await axios.get('https://6678dbb00bd4525056200974.mockapi.io/api/v1/fotos');
  fotos.value = response.data;
} catch (error) {
  console.error('Error al obtener');
}
};

onMounted(() => {
fetchFotos();
});

</script>


<style scoped>

</style>