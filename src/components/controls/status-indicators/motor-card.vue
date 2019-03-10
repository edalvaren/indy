<template lang="pug">
    v-card(class="motor-display" :style="cardStyle" hover="" tile="")
        v-layout
            v-flex(xs5)
                v-img( :src="image" height="150px" contain)
            v-flex(xs7)
                v-card-title.headline.font-weight-bold {{cardTitle }}
                v-divider.light
                v-card-text.text--white(class="motor-display")
                    div Speed {{ speedValue + speedUnit }}
                    div Current {{ currentValue | currency | current }}
        v-card-actions(class="pa-3")
            v-spacer



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

        },
        data: function() {
            return {
                actualSpeed: this.speedValue,
                actualCurrent: this.currentValue
            }
        },
        computed: {

        },
        filters: {
            currency(amount) {
                const amt = Number(amount);
                return amt && amt.toLocaleString(undefined, {maximumFractionDigits:2}) || '0'
            },
            current(number) {
                return number + " A"
            },
            frequency(number) {
                return number + " Hz"
            },
            speed(number) {
                return number + " RPM"
            },
            percent(number) {
                return number + " %"
            },
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
    $original-card-color = #E8EAF6

    .motor-display
        font-family Roboto, sans-serif
    @media only screen and (max-width: 600px)
        .motor-display
            font-size 18px
    @media only screen and (min-width: 786px)
        .motor-display
            font-size 24px
    @media only screen and (min-width: 992px)
        .motor-display
            font-size 32px

</style>