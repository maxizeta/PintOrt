import { createRouter, createWebHistory} from 'vue-router'; 
import menu from './components/menu.vue';
import login from './components/login.vue';
import navbar from './components/navbar.vue';
import footer from './components/footer.vue';

const routes = [
    {
      path: '/',
      name: 'menu',
      component: menu
    },
   
  
    { path: '/fotos', name: 'fotos', component: () => import('./components/fotos.vue') },
        
    { path: '/form', name: 'form', component: FormView },
    { path: '/form/:id', component: FormView },
    
    {
      path: '/login', name:'login',
      component: login  
    },
    {
        path: '/navbar', name:'navbar',
        component: navbar 
    },
    {
        path: '/footer', name:'footer',
        component: footer 
    }
];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  router.beforeEach((to, from, next) => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if(to.matched.some(record => record.meta.requiresAdmin)) {
        if(usuario && usuario.role === 'admin') {
            next();
        } else {
            next('/login');
        }
    }else {
        next();
    }
  });
  
  export default router;