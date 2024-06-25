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
          <!-- <router-link :to="{ name: 'eliminarFotoMes', params: { id:foto.id } }">Eliminar</router-link> -->
          <button @click="eliminarFoto(foto.id)"> Eliminar </button>

        </td>
        <td>
          <router-link :to="{ name: 'editarFotoMes', params: { id:foto.id } }">Editar</router-link>

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
import { useRoute, useRouter } from 'vue-router';

const fotos = ref([]);
const router = useRouter();
const fetchFotos = async () => {
try {
  const response = await axios.get('https://6678dbb00bd4525056200974.mockapi.io/api/v1/fotos');
  fotos.value = response.data;
} catch (error) {
  console.error('Error al obtener');
}
};
//esto es provisorio hasta arreglar la vista eliminar
const eliminarFoto = async (id) => {
  
    try {
        await axios.delete(`https://6678dbb00bd4525056200974.mockapi.io/api/v1/fotos/${id}`);
        console.log('Foto eliminada');
        router.push('/administrador');
    } catch (error) {
        console.error('Error al eliminar');
       
        
    }
};

onMounted(() => {
fetchFotos();

});

</script>


<style scoped>

</style>