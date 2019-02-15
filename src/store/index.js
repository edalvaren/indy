import Vue from 'vue'
import Vuex from 'vuex'
import socketStore from './socketStore'


Vue.use(Vuex);


const moduleA = {
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

const moduleB = {
  state: {
    now: new Date
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

const alarmStore = {
  state: {
    alarms: []
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
};


export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
    alarmStore: alarmStore,
    socketStore: socketStore
  }
});
