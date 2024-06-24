import { createRouter, createWebHistory } from 'vue-router';
import Menu from '../components/menu.vue';
import Footer from '../components/footer.vue';
import Registro from '../components/registro.vue';
import Login from '../components/login.vue';
import Fotos from '../components/fotos.vue';
import Administrador from '../components/administrador.vue';
import NotAdmin from '../components/notAdmin.vue';
import AgregarFotoMes from '../components/AgregarFotoMes.vue';
import EliminarFotoMes from '../components/EliminarFotoMes.vue';
const routes = [
  {
    path: '/',
    name: 'menu',
    component: Menu,
    meta: { requiresAuth: true } 
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
  },

  {
    path: '/administrador', name: 'administrador',
    component: Administrador, meta: { requiresAdmin: true},
  },

   { path: '/notAdmin', name: 'notAdmin',
      component: NotAdmin },


  { path: '/agregarFotoMes', 
    name: 'agregarFotoMes',
   component: AgregarFotoMes,
   meta: {requiresAuth: true, requiresAdmin: true},
   },

   { path: '/eliminarFotoMes', name: 'eliminarFotoMes',
    component: EliminarFotoMes, meta: { requiresAuth: true, requiresAdmin: true},}
    
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  console.log('EL TO', to);
  if(to.meta.requiereAuth && !isAuthenticated){
      next('/login')
  }
  else{
      next();
  }
})
router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user')); //para obtener que el usuario esta loggeado y convertir el usuario en objeto
  if(to.matched.some(record => record.meta.requiresAdmin)){
      if(user && user.role === 'admin'){
          next(); // para continuar navegacion
      } else {
          next('/notAdmin');
      }
  } else {
      next();
  }

  });
export default router;
