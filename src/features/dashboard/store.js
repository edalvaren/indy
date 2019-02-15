import store from 'src/store';


store.registerModule('dashboard', {
    namespaced: true,

    //State loaded when this component is first loaded
    state: {
        SpiralName: '',
        SessionDuration: 0
    },
    mutations: {
        updateSpiralName(state, newVal) {
            state.SpiralName = newVal
        }
    },
    actions: {
        updateSpiralName({state, commit, rootState, dispatch}, newVal){
            console.log(newVal)
            commit('updateSpiralName', newVal)
        }
    },
    getters: {

    }
});