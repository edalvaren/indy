<template lang="pug">
    v-container.fluid.grid-list-xs
        v-card.mx-auto(max-width="900" color='primary' dark)
            v-toolbar(card dense)
                v-toolbar-title
                    span.subheading {{sliderLabel}}
                v-spacer
            v-card-text
                v-layout.justify-space-between.mb-auto
                    v-flex.text-xs-left
                        span.display-3.font-weight-light(v-text="sliderVal")
                        span.subheading.font-weight-light.mr-1  {{unit}}
                        v-fade-transition
                            v-avatar.mb-1.v-avatar--setpoint-slider(v-if="isRunning" :color="color" :style="{animationDuration: animationDuration}" size="32")
                    v-flex.text-xs-right
                        v-btn(dark depressed fab @click="toggle")
                            v-icon(large) {{ isRunning ? 'pan_tool': 'timelapse'}}
            v-layout.row.wrap
                v-flex(xs9 md9)
                    v-slider(v-model="sliderValClone"
                    always-dirty thumb-color="#B71C1C" color="#B71C1C"
                    class="styled-slider"
                    :min="minVal" :max="maxVal" append-icon="check_circle"
                    @end="onEnd(sliderValClone)")
                v-flex(xs3 md3)



</template>
<script>
export default {
    name: 'setpoint-slider',
    props: {
        // value shown as card text
        sliderVal:{
          required: false,
        },
        // Hz, RPM, Amps, etc...
        unit: {
            type: String
        },
        // title of the card
        sliderLabel: {
            type: String
        },
        minVal: {
            type: Number
        },
        maxVal: {
            type: Number
        },
        // emitted when the appended icon is clicked
        onClickAppend: {

        },
        // Slider value emitted at start of slider movement
        onStart: {

        },
        // Slider value emitted at the end of slider movement
        onEnd: {
            type: Function
        },
        // emitted when the input is changed by user interaction
        onChange: {
            type: Function
        }

    },
    data(){
        return{
        sliderValClone: this.sliderVal,     // cannot mutate Props directly because parent commponent will re render them.. instead we clone it...
        isInterval: null,
        isRunning: false
    }},
    computed: {
        color () {
            if (this.sliderValClone < 60) return '#4CAF50'
            if (this.sliderValClone < 50) return 'B71C1C'
            if (this.sliderValClone < 40) return '8BC34A'
            if (this.sliderValClone < 20) return 'error'
        return 'red'
        },
        animationDuration () {
        return `${30 / this.sliderValClone}s`
        }
    },
    methods: {
        toggle () {
            this.isRunning = !this.isRunning
        }
    },
    filters: {
        frequency(number){
            return number + "Hz"
        }
    }
}
</script>
<style lang="stylus" scoped>
 @keyframes setpoint-example {
    from {
      transform: scale(.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--setpoint-slider
    animation-name: setpoint-example;
    animation-iteration-count: infinite;
    animation-direction: alternate;

  .styled-slider
    margin: auto


</style>
