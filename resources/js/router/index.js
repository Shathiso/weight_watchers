import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Admin from '../views/Admin'
import Test from '../views/Test'


  Vue.use(VueRouter)

  const routes = [
    { path: '/', 
      name: 'Home',
      component: Home 
    },
    { path: '/login', 
      name: 'Login',
      component: Login 
    },
    { path: '/register', 
      name: 'Register',
      component: Register 
    },
    { path: '/admin', 
    name: 'Admin',
    component: Admin 
    },
    { path: '/test', 
    name: 'Test',
    component: Test 
    }
  ];

  const router = new VueRouter({
    routes
  });

  export default router;