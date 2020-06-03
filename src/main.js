import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Company from './components/Company'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const routes = [
  {path: '/company', component: Company},
  {path: '/*', component: Company}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


