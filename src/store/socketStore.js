

export const socketStore = {
    state: {
        isConnected: false,
        message: null,
        tags: [
            {dataType: null, name: "default Tag", value: 0}

        ]
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
        }
    },
    actions: {

    },
    getters: {
        DrumCurrent: state => state.tags.find(o => o.name === "Spiral_Drum.VFD_Feedback_Current"),
        DrumSpeed: state => state.tags.find(o => o.name === "Spiral_Drum.VFD_Feedback_Frequency"),
        counterAcc: state => state.tags.find(o => o.name === "new_counter.acc"),
        TuSpeed: state => state.tags.find(o => o.name === "Spiral_Takeup.VFD_Feedback_Frequency"),
        TuCurrent: state => state.tags.find(o => o.name === "Spiral_Takeup.VFD_Feedback_Current"),
        FreqSp: state => state.tags.find(o => o.name === "HMI_Frequency_Setting"),
        TorqueSp: state => state.tags.find(o => o.name === "HMI.Tension_Control.Torque_Setpoint")
    }
};