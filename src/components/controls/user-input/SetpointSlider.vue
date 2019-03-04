<template lang="pug">
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
                        v-avatar.mb-1.v-avatar--setpoint-slider(v-if="isRunning" :style="{animationDuration: animationDuration}" size="12")
                v-flex.text-xs-right
                    v-btn(dark depressed fab @click="toggle")
                        v-icon(large) {{ isRunning ? 'pan_tool': 'timelapse'}}

            v-slider(v-model="sliderVal" always-dirty thumb-color="#B71C1C" color="#B71C1C" :min="minVal" :max="maxVal")



</template>
<script>
export default {
    name: 'setpoint-slider',
    props: {
        sliderVal: {
            type: String
        },
        unit: {
            type: String
        },
        sliderLabel: {
            type: String
        },
        minVal: {
            type: Number
        },
        maxVal: {
            type: Number
        }

    },
    data: () => ({
        isInterval: null,
        isRunning: false
    }),
    computed: {
        color () {

        },
        animationDuration () {
            return `${60 / this.sliderVal}s`
        }
    },
    methods: {
        decrement () {

        },
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
 @keyframes setpoint-example{
    from {
      transform: scale(.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--setpoint-slider {
    animation-name: setpoint-example;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
</style>
