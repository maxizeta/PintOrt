<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <nav class="navbar">
      <div class="nav-container">
              <router-link class="navbar-brand" to="/">PintOrt</router-link>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"> 
         <span class="navbar-toggler-icon"></span>
        </button> 
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link class="nav-link" to="/fotos">Fotos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Fotos del mes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Iniciar sesión</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/registro">registro</router-link>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/adminsitrador">Administrador</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/agregarFotoMes">Agregar Foto</router-link>
            </li>
            
            
            
            <li class="nav-item" v-if="!isAuthenticated">
                <button @click="logout" class="nav-link" style="background: none; border: none; cursor: pointer;">Salir</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {

  setup(){
    const router=useRouter();
    const isAuthenticated=computed(()=> localStorage.getItem('isAutheticated'=== true))
    function logout(){
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('user');
            localStorage.removeItem('admin')
            router.push('/login')
        }
        return {
            isAuthenticated, logout
        }


  }

}
</script>


<style scoped>
.navbar {
  background-color: #A0937D;
  color: white;
  padding: 1rem 1.5rem;
  width: 100%;
}

.nav-container {
  max-width: 1200px; 
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-item {
  margin-left: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: #555;
}

.navbar-brand {
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
}

.logout-button {
  background: none;
  border: none;
  cursor: pointer;
}

</style>