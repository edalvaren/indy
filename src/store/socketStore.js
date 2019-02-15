
// Default State
const defaults = {
    SpiralName: 'Spiral01',
};


export default {
    namespaced: true,

    state: Object.assign({}, defaults),
    mutations: {
        updateSpiralName(state, newName){
            state.SpiralName = newName
        }
    },
    actions: {
        updateSpiralName(context, newName) {
            context.commit('updateSpiralName', newName)
        },
    },
    getters: {
        SpiralName: state => state.SpiralName
    },

};