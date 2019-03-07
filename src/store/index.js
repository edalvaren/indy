import Vue from 'vue';
import Vuex from 'vuex';
import {socketStore} from './socketStore';

Vue.use(Vuex);
Vue.config.devtools = true;

const appComponentStore = {
  state: {
    drawer: null,
    message: '',
    messages: [],
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





export default new Vuex.Store({
  modules: {
    effectStore: appComponentStore,
    timeStore: TimingFuncStore,
    socketStore: socketStore
  },
  // plugins: [vuexLocal.plugin]
});
