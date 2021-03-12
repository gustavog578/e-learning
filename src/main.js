import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router';


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter);


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import Home from './components/Home.vue'
import Activities from './components/Activities.vue'
import Material from './components/Material.vue'

const routes = [
  {
    name : 'Home',
    path : '/',
    component: Home
  },
 
  {
    name: 'Activities',
    path: '/activities',
    component: Activities
  },

  {
    name: 'Materials',
    path: '/materials',
    component: Material
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
