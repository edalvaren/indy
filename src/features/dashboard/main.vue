<template lang="pug">
    v-container(:style="containerStyle" fluid grid-xlist-xs="")
        v-layout.row.wrap(class="MainButtons" justify-space-around)
            v-flex.d-flex(xs12 md4 sm12)
                start-button(:onClick="startButtonClicked") {{ spiralRunning ? 'Running' : 'Start' }}
            v-flex.d-flex(xs12 md4 sm12)
                stop-button( :onClick="stopButtonClicked") Stop
            v-flex.d-flex(xs12 md4 sm12)
                reset-button( :onClick="resetButtonClicked") Reset
        v-layout.row.wrap(class="slider-row dark")
            v-flex.d-flex(xs12 md6)
                motor-card(:motorStatus="drumStatus.value" :cardTitle="Drum.cardTitle" :speedUnit="Drum.speedUnit" :image="Drum.image" :speedValue="drumSpeed.value"
                :currentValue="drumCurrent.value" :cardStyle="cardStyle")
            v-flex.d-flex(xs12 md6)
                motor-card(:motorStatus="takeUpStatus.value" :cardTitle="TakeUp.cardTitle" :speedUnit="TakeUp.speedUnit" :image="TakeUp.image" :speedValue="tuSpeed.value"
                :currentValue="tuCurrent.value" :cardStyle="cardStyle" )
                    div Load Cell....{{loadCell.value | currency | percent }}
        v-layout.row.wrap(class="slider-row dark")
            v-flex.d-flex(xs12 md6)
                SetpointSlider(:unit="speedSetPoint.unit" :sliderLabel="speedSetPoint.label" :minVal="speedSetPoint.min" :maxVal="speedSetPoint.max"
                :sliderVal="freqSp.value" :sliderValClone="speedSetPoint.inputValue" :onEnd="speedChanged" :cardStyle="cardStyle")
            v-flex.d-flex(xs12 md6)
                SetpointSlider(:unit="torqueSetPoint.unit" :sliderLabel="torqueSetPoint.label" :minVal="torqueSetPoint.min" :maxVal="torqueSetPoint.max"
                :sliderVal="torqueSp.value" :sliderValClone="torqueSetPoint.inputValue" :onEnd="torqueChanged" :cardStyle="cardStyle" )
        v-layout.row
            home-dial


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
                console.log(`socket connected...with socket ID ${this.$socket.id}`)
            },
            customEmit: function (data) {
                console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
            }
        },
        computed: {
          ...mapState({
            // allTags: state => state.socketStore.tags,
            connected: state=> state.socketStore.isConnected
          }),
            ...mapGetters({
               drumSpeed: 'DrumSpeed',
               tuSpeed: 'TuSpeed',
               drumCurrent: 'DrumCurrent',
               tuCurrent: 'TuCurrent',
               freqSp: 'FreqSp',
               torqueSp: 'TorqueSp',
               loadCell: 'LoadCell',
               spiralRunning: 'SpiralRunning',
               takeUpStatus: 'TakeUpStatus',
               drumStatus: 'DrumStatus'
            }),
        },
        components:{
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
                containerStyle:{
                    width: "100%",
                    height: "100%"
                },
                cardStyle: {
                  color: "#f4f4f4",
                  backgroundColor: '#212121'
                },
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
        filters: {
            running(number){
                switch(number){
                    case '1.00': return "Running";
                    case '0.00': return "Start";
                    default: return "Oops";
                }
            }
        },
        methods: {
            getStartText(property){
                if (property)
                {
                    return "Running"
                }
                else {
                    return "Start"
                }
            },
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
    .blink_me {
        animation: blinker 1.5s linear infinite;
    }

    @keyframes blinker {
        50% {
            opacity: 0.5;
        }
    }
    @media only screen and (max-width: 600px) {
        .MainButtons {
            font-size 32px

        }
        .styled-slider {
            font-size: 26px;
        }
    }

    @media only screen and (min-width: 786px) {
        .MainButtons {
            font-size 38px

        }

        .styled-slider {
            font-size 38px
        }
    }

    @media only screen and (min-width: 992px) {
        .MainButtons {
            font-size 72px
        }
        .styled-slider {
            font-size: 26px;
        }
    }
</style>