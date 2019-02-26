import store from '../../store';

store.registerModule('alarms', {
    namespaced: true,

    //State loaded when this component is first loaded
    state: {
        AlarmActive: false,
        ActiveAlarmNumber: 0,
        ActiveAlarms: [],
        // SpiralName: '',
        // SessionDuration: 0,
        // // socket: io(process.env.SOCKET_URL)
    },
    mutations: {
        resetAlarm(state, newVal) {
            // state.AlarmActive = false;
        },
        addAlarm(state, newAlarm) {
            state.ActiveAlarms = [...state.ActiveAlarms, newAlarm]
        }
    },
    actions: {
        updateAlarms({state, commit, rootState, dispatch}, newVal){
                commit('addAlarm', newVal);
        },
    },
    getters: {

   }
});

export default store;