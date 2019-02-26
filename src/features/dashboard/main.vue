<template lang="pug">
    v-container(fluid="" grid-list-xs="")
        v-layout.row.wrap(class="MainButtons")
            v-flex.d-flex(xs12 sm12 md12)
                v-layout.row(wrap)
                    v-flex.d-flex(xs12="" sm4 md3)
                        start-button( :onClick="startButtonClicked") Start
                    v-flex.d-flex(xs12="" md3 sm4)
                        stop-button( :onClick="stopButtonClicked") Stop
                    v-flex.d-flex(xs12="" md3 sm4)
                        reset-button( :onClick="resetButtonClicked") Reset
        v-layout.row.wrap
        v-divider
        v-layout.row.wrap
            v-flex.d-flex(xs12 sm12 md12)
               v-layout.row
                    v-flex.d-flex(v-for="data in speedTags" :key="speedTags.id" sm6 md6 xs6)
                       div(v-if="data.id === 0")
                            motor-card( :CardTitle="data.cardTitle" :SpeedValue="tagVal[2].value" :Unit="data.SpeedUnit"  :CurrentValue="tagVal[3].value" :CardImage="data.Image")
                       div(v-else-if="data.id === 1")
                            motor-card( :CardTitle="data.cardTitle" :SpeedValue="tagVal[12].value" :Unit="data.SpeedUnit"  :CurrentValue="tagVal[13].value" :CardImage="data.Image")
                    <!--v-flex.d-flex-->
                        <!--torque-card( :CardTitle="torqueTags.cardTitle" :LoadCellValue="tagVal[17].value" :TorqueValue="tagVal[4].value" :CardImage="torqueTags.Image")-->

</template>

<script>
import { StartButton, StopButton, ResetButton} from 'controls/momentary-push-button';
import {MotorCard, TorqueCard} from "controls/status-indicators";
import {mapState, mapGetters} from 'vuex';
import store from '@/store'; // eslint-disable-line no-unused-vars
import MoviDrive from '@/assets/movidrive.png';
import PowerFlex from '@/assets/powerflex.png';
import LoadCell from '@/assets/loadcell.png';

export default {
    name: 'dashboard',
    computed: {

       ...mapState({
            Socket: state => state.socketStore.Socket,
            tagVal: state => state.socketStore.tagVal,
        }),
        ...mapGetters({
            DrumSpeed: 'socketStore/DrumSpeed',
            DrumCurrent: 'socketStore/DrumCurrent',
            TakeUpSpeed: 'socketStore/TakeUpSpeed',
            TakeUpCurrent: 'socketStore/TakeUpCurrent'
        }),
    },
    mounted(){
        this.Socket.on('TAG', (data) => {
            this.$store.dispatch('socketStore/updateTags', data)
        });
    },
    components: {
        StartButton,
        StopButton,
        ResetButton,
        MotorCard,
        TorqueCard
    },
    data: () => ({
        speedTags: [
            {id: 0, cardTitle: "Drum", SpeedUnit: " Hz", SpeedValue: '', CurrentValue: '5.71',  Image: PowerFlex},
            {id: 1, cardTitle: "TU", SpeedUnit: " RPM", SpeedValue: '1853', CurrentValue: '1.81', Image: MoviDrive},
        ],
        torqueTags:
            {id: 0, cardTitle: "Drum", SpeedUnit: " Hz", SpeedValue: '20', CurrentValue: '5.71',  Image: LoadCell},

    }),
    methods: {
        startButtonClicked (e) {
          e.preventDefault();
          this.Socket.emit('TOGGLE_START');

        },
        stopButtonClicked (e) {
            e.preventDefault();
            this.Socket.emit('TOGGLE_STOP');
        },
        resetButtonClicked (e) {
          e.preventDefault();
          this.Socket.emit('TOGGLE_BIT', "test_bit_array[15]");
        },
        updateSpiralName (e) {
            e.preventDefault();
        },
        pressButton (e) {
            e.preventDefault();
            alert("It works")
        }
    },
    }


</script>

<style scoped lang="stylus">

    .MainButtons
        background-color #37474f
        margin-top: 10px
        margin-bottom 25px
        border: inset 4px 'accent'
        justify-content space-between
        align-content center
        align-items center

</style>