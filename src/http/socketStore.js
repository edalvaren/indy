import store from '../store'
import _ from 'lodash'
import io from 'socket.io-client'
store.registerModule('socketStore', {
    namespaced: true,

    //State loaded when this component is first loaded
    state: {
        Socket: io('localhost:5000'),
        Connected: false,
        ConnectionId: '',
        ServerMessage: '',
        TagReceived: [],
        tagVal: null,
        pickedTag: null,
        AlarmActive: false,
        ActiveAlarmNumber: 0,
        ActiveAlarms: [],
    },
    mutations: {
        setSocketId(state, newVal) {
          state.ConnectionId = newVal;
        },
        sendMessage(state, msg){
            state.ServerMessage = msg;
        },
        updateTags(state, newVal){
            state.TagReceived = [newVal]
        },
        updateTagVal(state, newVal){
            state.tagVal = state.TagReceived[0];
        },
        pickTagVal(state, newVal){
            state.pickedTag = _.filter(newVal, x => x.name === "Spiral_Drum.VFD_Feedback_Frequency")
        },
        addAlarm(state, alarm) {
            state.ActiveAlarms.push(alarm);
        }

    },
    actions: {
        updateTags({state, commit, rootState, dispatch}, newVal){
            commit('updateTags', newVal);
            if(newVal !== "NaN"){
                commit('updateTagVal', newVal);
            }
            dispatch('updateTagsByVal', state.TagReceived.name);
            // commit('updateTagVal', .name);
        },
        updateTagsByVal({state, commit, rootState, dispatch}, newVal, valueToMatch){
            commit('pickTagVal', state.tagVal);
            // commit('updateTagVal', _.filter(newVal, x => x[0].name === "Spiral_Drum.VFD_Feedback_Frequency"));
        },
        updateAlarms({state, commit, rootState, dispatch}, newVal){
                commit('addAlarm', newVal);

            // commit('updateTagVal', .name);
        },
    },
    getters: {
        Socket: state => state.Socket,
        ConnectionId: state => state.Socket.id,

        Connected: state => {
            return state.ConnectionId.length <= 0;

        },
        TagsReceived: state => state.TagReceived,
        TagVal: state => state.tagVal,
        DrumSpeed: state => state.tagVal[2],
        DrumCurrent: state => state.tagVal[3],
        TakeUpSpeed: state => state.tagVal[12],
        TakeUpCurrent: state => state.tagVal[13],
        activeAlarms: state => state.ActiveAlarms,
    },
});

export default store;