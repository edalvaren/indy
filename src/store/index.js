import Vue from 'vue'
import Vuex from 'vuex'
import socket from '../http/socket'
import createWebSocketPlugin from '../plugins/webSocketPlugin';

Vue.use(Vuex);


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



const plugin = createWebSocketPlugin;

export default new Vuex.Store({
  modules: {
    a: appComponentStore,
    b: TimingFuncStore,
  },
});
