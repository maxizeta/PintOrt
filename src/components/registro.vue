<template>
  <div class="register-form-container">
    <h1>Registro</h1>
    <form @submit.prevent="register" class="register-form">
      <input v-model="username" type="text" placeholder="Username" class="register-input"/>
      <input v-model="email" type="email" placeholder="Email" class="register-input"/>
      <input v-model="password" type="password" placeholder="Password" class="register-input"/>
      <button type="submit" class="register-button">Registro</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const register = async () => {
      if (username.value && email.value && password.value) {
        const user = { role: username.value === 'admin' ? 'admin' : 'user' };
        localStorage.setItem('user', JSON.stringify(user));

        if (user.role === 'admin') {
          router.push('/admin-report');
        } else {
          router.push('/dashboard');
        }
      }
    };

    return {
      username,
      email,
      password,
      register,
    };
  },
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
