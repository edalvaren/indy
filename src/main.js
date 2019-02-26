import Vue from 'vue'
import App from './App.vue'

import {router, http} from './http'

import store from './store'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import {sync} from 'vuex-router-sync';
import './styles/stylus/main.styl';
import Vuetify from 'vuetify';
import VuetifyOptions from './plugins/vuetify-options';
import {socketStore} from './http';
import { ValidationProvider } from 'vee-validate';


// Sync router to store, as `store.state.route`.
sync(store, router);

Vue.use(Vuetify, VuetifyOptions);
Vue.use(http);
Vue.use(require('vue-moment'));
Vue.component('ValidationProvider', ValidationProvider);



//Styles
import './styles/stylus/main.styl';

Vue.config.productionTip = false;




new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app');
