<template>
    login
    <pedirNombre/>
    <pedirContra/>
</template>
<script>
function pedirNombre() {
    let nombre = prompt("ingrese su nombre")
    return nombre
}
function pedirContra(){
    let contra = prompt("ingrese su contraseña")
    return contra
}

</script>