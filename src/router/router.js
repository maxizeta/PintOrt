import { createRouter, createWebHistory } from 'vue-router';
import Menu from '../components/menu.vue';
import Footer from '../components/footer.vue';
import Registro from '../components/registro.vue';
import Login from '../components/login.vue';
import Fotos from '../components/fotos.vue';

const routes = [
  {
    path: '/',
    name: 'menu',
    component: Menu
  },
  {
    path: "/registroDeUsuario",
    name: "registro",
    component: Registro
  },
  {
    path: '/footer',
    name: 'footer',
    component: Footer
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false } // No requiere autenticación
  },
  {
    path: '/fotos',
    name: 'fotos',
    component: Fotos,
    meta: { requiresAuth: true } // Requiere autenticación
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user') !== null;
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirecciona a /login si se intenta acceder a una ruta protegida sin autenticación
  } else {
    next(); // Continúa navegando normalmente
  }
});

export default router;
