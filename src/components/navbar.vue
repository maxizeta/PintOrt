<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">app</a>
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarnav">
                <ul class="navbar-nav">
                    <li>
                        <router-link class="nav-link" to="/menu">menu</router-link>
                    </li>
                    <li>
                        <router-link class="nav-link" to="/login">login</router-link>
                    </li>
                    <li>
                        <router-link class="nav-link" to="/fotos">fotos</router-link>
                    </li>
                    <li>
                        <router-link class="nav-link" to="/footer">footer</router-link>
                    </li>
                <button @click="logout">salir</button>    
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import {useRouter} from "vue-router"

const logout = () => {
    router.push("/login")
}

</script>