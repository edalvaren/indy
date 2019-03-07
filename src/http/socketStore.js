import store from '@/store'
import _ from 'lodash'
import io from 'socket.io-client'
store.registerModule('socketStore', {
    namespaced: true,

    //State loaded when this component is first loaded
    state: {
        // Socket: io('localhost:5000'),
        Connected: false,
        socketOnline: false,
        ConnectionId: '',
        ServerMessage: '',
        TagReceived: [],
        tagVal: [],
        AlarmActive: false,
        ActiveAlarmNumber: 0,
        ActiveAlarms: [],
    },
    mutations: {
        setSocketId(state, newVal) {
            state.ConnectionId = newVal;
        },
        SOCKET_CONNECT(state) {
          state.socketOnline = true;
        },
        SOCKET_DISCONNECT(state){
          state.socketOnline = false;
        },
        sendMessage(state, msg){
            state.ServerMessage = msg;
        },
        updateTags(state, newVal){
            state.TagReceived = [newVal]
        },
        updateTagVal(state, newVal){
            state.tagVal = state.TagReceived[0]
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
            // dispatch('updateTagVal', state.TagReceived.name);
            // commit('updateTagVal', .name);
        },
        updateTagVal({state, commit, rootState, dispatch}, newVal, valueToMatch) {
            commit('updateTagVal', newVal)
        },
        updateAlarms({state, commit, rootState, dispatch}, newVal){
            commit('addAlarm', newVal);

            // commit('updateTagVal', .name);
        },
    },
    getters: {
        // Socket: state => state.Socket,
        // ConnectionId: state => state.Socket.id,
        // Connected: state => {
        //     return state.ConnectionId.length <= 0;
        //
        // },
        DrumSpeed: state => state.tagVal.find(o => o.name === "Spiral_Drum.VFD_Feedback_Frequency"),
        DrumCurrent: state => state.tagVal.find(o => o.name === "Spiral_Drum.VFD_Feedback_Current"),
        TuSpeed: state => state.tagVal.find(o => o.name === "Spiral_Takeup.VFD_Feedback_Frequency"),
        TuCurrent: state => state.tagVal.find(o => o.name === "Spiral_Takeup.VFD_Feedback_Current"),
        TagVal: state => state.tagVal,
        FreqSp: state => state.tagVal[19],
        TorqueSp: state => state.tagVal[6],
        activeAlarms: state => state.ActiveAlarms,
    },
});

function checkDuplicateInObject(propertyName, inputArray) {
    let seenDuplicate = false,
        testObject = {};

    inputArray.map(function (item) {
        let itemPropertyName = item[propertyName];
        if (itemPropertyName in testObject) {
            testObject[itemPropertyName].duplicate = true;
            item.duplicate = true;
            seenDuplicate = true;
        }
        else {
            testObject[itemPropertyName] = item;
            delete item.duplicate;
        }
    });

    return seenDuplicate;
}



/**
 * Checks an Object to see if it's empty or = to {}
 * @param obj Object to check for empty condition
 * @returns {boolean}
 */
function isEmpty(obj){
    for (var key in obj){
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


export default store;