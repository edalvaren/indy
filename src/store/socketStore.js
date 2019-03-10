

export const socketStore = {
    state: {
        isConnected: false,
        message: null,
        tags: [
            {dataType: null, name: "default Tag", value: 0}
        ],
        alarms: [
            {AlarmName: "defaultAlarm", AlarmNumber: 0, AlarmStatus: false}
        ],
        activeAlarms: [],
        systemFaulted: false,
    },
    mutations: {
        SOCKET_CONNECT(state, status) {
            state.isConnected = true;
        },
        SOCKET_USER_MESSAGE(state, message) {
            state.message = message;
        },
        SOCKET_TAG(state, tags) {
            state.tags = tags.slice();
        },
        SOCKET_ALARM(state, alarms){
            state.alarms = alarms.slice();
        },
        SOCKET_ALARM_NUM(state, msg){
            state.activeAlarms.push(msg);
        }
    },
    actions: {

    },
    getters: {
        DrumCurrent: state => state.tags.find(o => o.name === "Spiral_Drum.VFD_Feedback_Current"),
        DrumSpeed: state => state.tags.find(o => o.name === "Spiral_Drum.VFD_Feedback_Frequency"),
        TuSpeed: state => state.tags.find(o => o.name === "Spiral_Takeup.VFD_Feedback_Frequency"),
        TuCurrent: state => state.tags.find(o => o.name === "Spiral_Takeup.VFD_Feedback_Current"),
        FreqSp: state => state.tags.find(o => o.name === "HMI_Frequency_Setting"),
        TorqueSp: state => state.tags.find(o => o.name === "HMI.Tension_Control.Torque_Setpoint"),
        LoadCell: state => state.tags.find(o => o.name === "Load_Cell_Percent"),

        SpiralRunning: state => (state.tags.find(o => o.name === "HMI_Spiral_Run").value !== "0.00"),
        SystemFaulted: state => {
            // let activeAlarm = state.alarms.find(o => o.AlarmStatus === true);
            // return (typeof activeAlarm === 'undefined');

            for(var i = 0 ; i < state.alarms.length; i++) {
                if (state.alarms[i].AlarmStatus === true) {
                    return true;
                }
            }
            return false;
        },
        UnclearedAlarm: state => {
            for(var i = 0 ; i < state.alarms.length; i++) {
                if (state.alarms[i].AlarmStatus === true) {
                    return state.alarms[i];
                }
            }

        }
    }
};