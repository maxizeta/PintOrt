import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
<<<<<<< HEAD
import Router from "./router/router.js"
=======
import Router from './router/router.js'
>>>>>>> origin/yami

// Importar Bootstrap CSS y JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Importar Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';


createApp(App).use(Router).mount('#app')
