<template>
    <div class="text-center">
        <h3>eliminar foto</h3>
        <img :src="foto.imagen" :alt="foto.alt_description" class="foto-image" />
        <button @click="eliminarFoto" class="btn btn-danger">Eliminar foto</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const foto = ref({});
const route = useRoute();
const router = useRouter();

onMounted(async () => {
    const fotoId = await router.params.id;
    try {
        const response = await axios.get(`https://6678dbb00bd4525056200974.mockapi.io/api/v1/fotos/7`);
        foto.value = response.data;
    } catch (error) {
        console.error('Error al obtener');
    }
});

const eliminarFoto = async () => {
    const fotoId = await router.params.id;
    try {
        await axios.delete(`https://6678dbb00bd4525056200974.mockapi.io/api/v1/fotos/7`);
        console.log('Foto eliminada');
        router.push('/administrador');
    } catch (error) {
        console.log(fotoId)
        console.error('Error al eliminar');
        
    }
};

</script>