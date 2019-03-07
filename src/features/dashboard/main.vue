<template lang="pug">
    v-container(fluid="" grid-xlist-xs="")
        v-layout.row.wrap(class="MainButtons" justify-space-around)
            v-flex.d-flex(xs12 md4 sm12)
                start-button( :onClick="startButtonClicked") Start
            v-flex.d-flex(xs12 md4 sm12)
                stop-button( :onClick="stopButtonClicked") Stop
            v-flex.d-flex(xs12 md4 sm12)
                reset-button( :onClick="resetButtonClicked") Reset
        v-divider
        v-layout.row.wrap(class="dashboard-sheet")
            v-flex.d-flex(xs12 md6)
                motor-card(:cardTitle="Drum.cardTitle" :speedUnit="Drum.speedUnit" :image="Drum.image" speedValue="DrumSpeed.value"
                :currentValue="drumCurrent.value")
            v-flex.d-flex(xs12 md6)
                motor-card(:cardTitle="TakeUp.cardTitle" :speedUnit="TakeUp.speedUnit" :image="TakeUp.image" :speedValue="tuSpeed.value"
                :currentValue="tuCurrent.value")
        v-layout.row.wrap
            v-flex.d-flex(xs12 md6)
                SetpointSlider(:unit="speedSetPoint.unit" :sliderLabel="speedSetPoint.label" :minVal="speedSetPoint.min" :maxVal="speedSetPoint.max"
                :sliderVal="freqSp.value" :sliderValClone="speedSetPoint.inputValue" :onEnd="speedChanged")
            v-flex.d-flex(xs12 md6)
                SetpointSlider(:unit="torqueSetPoint.unit" :sliderLabel="torqueSetPoint.label" :minVal="torqueSetPoint.min" :maxVal="torqueSetPoint.max"
                :sliderVal="torqueSp.value" :sliderValClone="torqueSetPoint.inputValue" :onEnd="torqueChanged")
        <!--v-layout.row.wrap-->
        <!--v-flex.d-flex(v-for="sp in setPoints" :key="setPoints.id" xs12 md6)-->
        <!--SetpointSlider(:sliderVal="sp.inputValue" :onEnd="speedChanged" :onClickAppend="pressButton" :unit="sp.unit", :sliderLabel="sp.label" :minVal="sp.min" :maxVal="sp.max")-->
        <!--&lt;!&ndash;SetpointSlider(:sliderVal="sp.inputValue" :onClickAppend="pressButton" :unit="sp.unit" :sliderLabel="sp.label" :minVal="sp.min" :maxVal="sp.max")&ndash;&gt;-->
</template>

<script>
    //import components
    import {
        StartButton,
        StopButton,
        ResetButton
    } from "controls/momentary-push-button";
    import {MotorCard} from "controls/status-indicators";
    import {HomeDial} from "@/components/controls/speed-dials";
    import {SetpointSlider} from "@/components/controls/user-input";
    import {freqSpTagName} from "@/helpers/constants";

    // Mapping store data to page data
    import {mapState, mapGetters} from "vuex";

    // Needed for the store to work
    import store from "@/store"; // eslint-disable-line no-unused-vars

    // Images for Cards
    import MoviDrive from "@/assets/movidrive.png";
    import PowerFlex from "@/assets/powerflex.png";
    // import LoadCell from "@/assets/loadcell.png";


    export default {
        name: "dashboard",
        sockets: {
            connect: function () {
                console.log('socket connected...yeah boy')
            },
            customEmit: function (data) {
                console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
            }
        },
        computed: {
          ...mapState({
            allTags: state => state.socketStore.tags,
            connected: state=> state.socketStore.isConnected
          }),
            ...mapGetters({
               drumSpeed: 'DrumSpeed',
               tuSpeed: 'TuSpeed',
               drumCurrent: 'DrumCurrent',
               tuCurrent: 'TuCurrent',
               freqSp: 'FreqSp',
               torqueSp: 'TorqueSp'
            })
        },
        components: {
            StartButton,
            StopButton,
            ResetButton,
            MotorCard,
            HomeDial,
            SetpointSlider
        },
        data() {
            return {
                tags: [],
                alertData: true,
                Drum:
                    {
                        cardTitle: "Drum",
                        speedUnit: " Hz",
                        image: PowerFlex,
                    },
                TakeUp:
                    {
                        cardTitle: "Take-up",
                        speedUnit: " RPM",
                        image: MoviDrive
                    },
                speedSetPoint:
                    {id: 0, unit: "Hz", label: "Speed", min: 0, max: 60, inputValue: 20},
                torqueSetPoint:
                    {id: 1, unit: "%", label: "Torque SP", min: 0, max: 100, inputValue: 50},

            }
        },
        mounted: function () {

        },
        methods: {
            clickButton: function (data) {
                // $socket is socket.io-client instance
                this.$socket.emit('emit_method', data)
            },
            startButtonClicked(e) {
                e.preventDefault();
                this.$socket.emit("TOGGLE_START");
            },
            stopButtonClicked(e) {
                e.preventDefault();
                this.$socket.emit("TOGGLE_STOP");
            },
            resetButtonClicked(e) {
                e.preventDefault();
                this.$socket.emit("CLEAR_ALARMS")
            },
            pressButton(e) {
                e.preventDefault();
                alert(e.target.sliderValClone);
            },
            speedChanged(e) {
                this.$socket.emit("CHANGE_SPEED", e);
            },
            torqueChanged(e) {
                this.$socket.emit("CHANGE_TORQUE", e);
            }
        }
    };
</script>

<style scoped lang="stylus">
    .MainButtons {
        background-color: #E8EAF6;
        margin-top: 1px;
        border: inset 8px 'accent';
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .dashboard-sheet {
        background-color: #E8EAF6;
        margin-top: 2px;
        padding-top: 3em;
    }

    @media only screen and (max-width: 600px) {
        .dashboard-sheet {
            height: 256px;
            font-size: 14px;
        }
    }

    @media only screen and (min-width: 786px) {
        .dashboard-sheet {
            height: 343;
            font-size: 16px;
        }
    }

    @media only screen and (min-width: 992px) {
        .dashboard-sheet {
            height: 483;
            font-size: 28px;
        }
    }
</style>