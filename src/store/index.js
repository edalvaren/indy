import Vue from 'vue';
import Vuex from 'vuex';
import socket from '../http/socket';
import createWebSocketPlugin from '../plugins/webSocketPlugin';
Vue.use(Vuex);
Vue.config.devtools = true;

const appComponentStore = {
  state: {
    drawer: null,
    message: '',
    messages: []
  },
  mutations: {
    change(state){
      state.drawer = !state.drawer
    },
    updateTag(state, newTag){
      state.message = newTag
    }
  },
  actions: {

  },
  getters: {
    drawer: state => state.drawer,
    message: state => state.message
  }
  ,
};

const TimingFuncStore = {
  state: {
    now: new Date()
  },
  mutations: {
    updateTime (state) {
      state.now = new Date
    }
  },
  actions: {
    start ({commit}){
      setInterval(() => {
        commit('updateTime')
      }, 1000*60)
    }
  },
  getters: {},
};


// const vuexLocal = new VuexPersist({
//   key: 'my-app',
//   storage: localStorage
// })


const plugin = createWebSocketPlugin;

export default new Vuex.Store({
  modules: {
    effectStore: appComponentStore,
    timeStore: TimingFuncStore,
  },
  // plugins: [vuexLocal.plugin]
});
