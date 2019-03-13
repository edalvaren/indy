<template lang="pug">
    v-card(class="motor-display" :style="cardStyle" hover="" tile="")
        v-card-title
            span.title.font-weight-bold {{cardTitle}}
        v-layout
            v-flex(xs5)
                v-img(class="motor-image" :src="image" contain)
            v-flex(xs7)
                v-card-text.text--white.font-weight-bold(class="motor-display")
                    div.d-inline Speed...{{ speedValue + speedUnit }}
                    div Current....{{ currentValue | currency | current }}
                    div.d-inline-flex
                        v-spacer
                        slot.text-sm-right
        v-divider
        v-card-actions
            v-list-tile.justify-end
                v-list-tile-avatar.v-avatar--setpoint-slider(v-if="flash" :color="color" :style="{animationDuration: animationDuration}" size="28")
            v-list-tile-content
                v-list-tile-title.subheading Motor Status
            v-layout.align-center.justify-end
                span.subheading.mr-2 {{motorStatus | vfdStatus}}



</template>

<script>
    export default {
        name: 'motorCard',
        props: {
            cardStyle: {
                type: Object,
                required: false
            },
            cardTitle: {
                type: String,
                required: false
            },
            speedUnit: {
                type: String,
                required: false
            },
            speedValue: {
                type: String,
                required: false
            },
            currentValue: {
                required: false
            },
            image: {
                type: String,
                required: false
            },
            motorStatus: {
                type: String,
                required: false
            }

        },
        data: function() {
            return {
                actualSpeed: this.speedValue,
                actualCurrent: this.currentValue,
                animationDurationMultiplier: "30",
            }
        },
        computed: {
            isRunning () {
              return this.motorStatus === "2.00";
            },
            isFaulted () {
                return (this.motorStatus === "3.00" || this.motorStatus === "4.00")
            },
            flash () {
              return (this.isFaulted || this.isRunning);
            },
            color () {
                if (this.motorStatus === "1.00") return '#FFEA00';
                if (this.motorStatus === "2.00") return '#4CAF50';
                if (this.motorStatus === "3.00") return '#B71C1C';
                if (this.motorStatus === "4.00") return '#1A237E';
                return 'red'
            },
            animationDuration(){
                return `${this.animationDurationMultiplier / 50}s`
            }

        },
        filters: {
            boolVal(number){
                switch(number){
                    case '1': return true;
                    case '0': return false;
                    default: return number;
                }
            }
        },
    }

</script>

<style scoped lang="stylus">
    .motor-image
        height 175px
    $original-card-color = #E8EAF6

    .motor-display
        font-family Roboto, sans-serif
        margin auto
    @media only screen and (max-width: 600px)
        .motor-display
            font-size 16px
        .motor-image
            height 100px
    @media only screen and (min-width: 786px)
        .motor-display
            font-size 18px
        .motor-image
            height 150px
    @media only screen and (min-width: 992px)
        .motor-display
            font-size 32px
        .motor-image
            height 175px
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

</style>