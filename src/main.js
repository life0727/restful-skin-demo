// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import element from './element/index' //element按需加载
import api from './http/api'
import './element/element-variables.scss'


Vue.config.productionTip = false;
Vue.prototype.$api = api;

Vue.use(element);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
