import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router/index'
import store from './store'
import Split from './components/Split/Split'
import './mock/mockServer'
import './filters'

Vue.component(Button.name, Button);
Vue.component('Split',Split)
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
