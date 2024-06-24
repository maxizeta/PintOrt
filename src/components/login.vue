<template>
    <div>
        <h2 class="text-center">Login</h2>
        <form @submit.prevent="login" class="container">
            <div class="mb-3">
                <label for="Username" class="form-label">Ingrese su usuario</label>
                <input type="text" class="form-control" id="Username" placeholder="Username" v-model="username" required>
            </div>
            <div class="mb-3">
                <label for="Password" class="form-label">Ingrese su contraseña</label>
                <input type="password" class="form-control" id="Password" placeholder="Password" v-model="password" required>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">iniciar sesión</button>
            </div>
        </form>
        <p v-if="errorMessage">{{ errorMessage }}
        </p>
    </div>
</template>
<script setup>

import axios from "axios";
import {ref} from "vue"
import {useRouter} from "vue-router"

const username = ref("")
const password = ref("")
const errorMessage = ref("")

const router = useRouter()

const login = () => {
    if (username.value === "admin" && password.value === "admin") {
        localStorage.setItem("user", JSON.stringify({role: "admin"}))
        localStorage.setItem("isAuthenticated", 'true')
        router.push("/administrador")
    } else if (username.value === "user" && password.value === "user"){
        localStorage.setItem("user", JSON.stringify({role: "user"}))
        router.push("/fotos")
    }
    else {
        errorMessage.value = "datos incorrectos"
    }
}
</script>