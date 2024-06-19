<template>
    <div class="register-form-container">
        <h1>{{Registro}}</h1>
        <form  @submit.prevent="register" class="register-form">
            <input v-model="username" type="text" placeholder="Username" class="register-input"/>
            <input v-model="email" type="email" placeholder="Email" class="register-input"/>
            <input v-model="password" type="password" placeholder="Password" class="register-input"/>
            <button type="submit" class="register-button">Registro</button>
        </form>
    </div>
</template>