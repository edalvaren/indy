<template lang="pug">
    v-container(fluid="" grid-list-xs="")
        v-layout.row.wrap(class="MainButtons" justify-center)
            v-flex.d-flex(xs12 md4 sm12)
                start-button( :onClick="startButtonClicked") Start
            v-flex.d-flex(xs12 md4 sm12)
                stop-button( :onClick="stopButtonClicked") Stop
            v-flex.d-flex(xs12 md4 sm12)
                reset-button( :onClick="resetButtonClicked") Reset
        div.row
        v-divider
        v-layout.row.wrap(class="dashboard-sheet")
            v-flex.d-flex(xs12 sm12 md12)
               v-layout.row
                    v-flex.d-flex(v-for="data in speedTags" :key="speedTags.id" sm6 md6 xs6)
                       div(v-if="data.id === 0")
                            motor-card( :CardTitle="data.cardTitle" :SpeedValue="tagVal[2].value" :Unit="data.SpeedUnit"  :CurrentValue="tagVal[3].value" :CardImage="data.Image")
                       div(v-else-if="data.id === 1")
                            motor-card( :CardTitle="data.cardTitle" :SpeedValue="tagVal[12].value" :Unit="data.SpeedUnit"  :CurrentValue="tagVal[13].value" :CardImage="data.Image")
        v-layout.row.wrap
            v-flex.d-flex(v-for="sp in setpoints" :key="setpoints.id" xs12 md6)
                div(v-if="sp.id === 0")
                    SetpointSlider(:sliderVal="FreqSp.value" :unit="sp.unit", :sliderLabel="sp.label" :minVal="sp.min" :maxVal="sp.max")
                div(v-if="sp.id === 1")
                    SetpointSlider(:sliderVal="TorqueSp.value" :unit="sp.unit" :sliderLabel="sp.label" :minVal="sp.min" :maxVal="sp.max")




</template>

<script>

//import components
import { StartButton, StopButton, ResetButton} from 'controls/momentary-push-button';
import {MotorCard} from "controls/status-indicators";
import  {HomeDial} from '@/components/controls/speed-dials';
import {SetpointSlider} from '@/components/controls/user-input';

// Mapping store data to page data
import {mapState, mapGetters} from 'vuex';

// Needed for the store to work
import store from '@/store'; // eslint-disable-line no-unused-vars

// Images for Cards
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
            TakeUpCurrent: 'socketStore/TakeUpCurrent',
            FreqSp: 'socketStore/FreqSp',
            TorqueSp: 'socketStore/TorqueSp'
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
        HomeDial,
        SetpointSlider
    },
    data: () => ({
        speedTags: [
            {id: 0, cardTitle: "Drum", SpeedUnit: " Hz", SpeedValue: '', CurrentValue: '5.71',  Image: PowerFlex},
            {id: 1, cardTitle: "TU", SpeedUnit: " RPM", SpeedValue: '1853', CurrentValue: '1.81', Image: MoviDrive},
        ],
        torqueTags:
            {id: 0, cardTitle: "Drum", SpeedUnit: " Hz", SpeedValue: '20', CurrentValue: '5.71',  Image: LoadCell},

        speedModes: ['Auto', 'Manual', 'Test'],

        setpoints: [
           {id: 0, unit: "Hz", label: "Speed", min: 0, max: 60},
           {id: 1, unit: "%", label: "Torque SP", min: 0, max: 100}
        ],
        hzUnit: "Hz",
        torqueUnit: "%"

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
        background-color #E8EAF6
        margin-top 16px
        border: inset 8px 'accent'
        justify-content center
        align-content center
        align-items center

    .dashboard-sheet
        background-color #E8EAF6
        margin-top 70px
        padding-top 2em

    @media only screen and (max-width: 600px)
        .dashboard-sheet
            height 256px
            font-size 14px

    @media only screen and (min-width: 786px)
        .dashboard-sheet
            height 343
            font-size 16px
    @media only screen and (min-width: 992px)
        .dashboard-sheet
            height 483
            font-size 28px
</style>