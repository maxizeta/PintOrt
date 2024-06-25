<template>
    <div class="register-form-container">
        <h1 class="text-center">Editar foto del mes</h1>
        <form @submit.prevent="editarFoto" class="container">
            <div class="mb-3">
                <label for="imagen" class="form-label">Foto </label>
                <input type="text" class="form-control" id="foto" placeholder="foto" v-model="fotoMes.imagen" required>
            </div>
            <div class="mb-3">
                <label for="descripcion" class="form-label">descripcion</label>
                <input type="descripcion" class="form-control" id="descripcion" placeholder="Descripcion" v-model="fotoMes.descripcion" required>
            </div>
           
            <div class="col-12">

                <button type="submit" class="btn btn-success">Editar</button>
            </div>
        </form>
    </div>
  </template>
  

  <script setup>
import { ref } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const route = useRoute();

const fotoMes = ref({
    imagen: '',
    descripcion: '',
    
});

const editarFoto = async () => {
  const fotoId = route.params.id;
    try {
        await axios.put(`https://6678dbb00bd4525056200974.mockapi.io/api/v1/fotos/7`, foto.value);
        router.push('/administrador');
    } catch (error) {
      // console.log('params: ',fotoId)
        console.error('Error al editar');
    }
};
  
 
  </script>
  
  <style scoped>
  .register-form-container {
    max-width: 500px;
    margin: auto;
    padding: 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .register-form {
    display: flex;
    flex-direction: column;
  }
  
  .register-input {
    margin-bottom: 1rem;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .register-button {
    padding: 0.75rem;
    border: none;
    background-color: #333;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .register-button:hover {
    background-color: #555;
  }
  </style>