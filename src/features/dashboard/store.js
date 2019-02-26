import store from '../../store';
import io from 'socket.io-client';

store.registerModule('dashboard', {
    namespaced: true,

    //State loaded when this component is first loaded
    state: {
        SpiralName: '',
        SessionDuration: 0,
        // socket: io(process.env.SOCKET_URL)
    },
    mutations: {
        updateSpiralName(state, newVal) {
            state.SpiralName = newVal
        }
    },
    actions: {
        updateSpiralName({state, commit, rootState, dispatch}, newVal){
            console.log(newVal);
            commit('updateSpiralName', newVal)
        }
    },
    getters: {
        SpiralName: state => state.SpiralName
    }
});

export default store;