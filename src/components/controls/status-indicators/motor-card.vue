<template lang="pug">
    v-card(class="motor-display" color="#E8EAF6"  ripple="" hover="" flat="" tile="")
        v-layout
            v-flex(xs5)
                v-img( :src="image" height="175px" contain)
            v-flex(xs7)
                v-card-title(primary-title="") {{cardTitle }}
                v-card-text(class="motor-display")
                    div {{speedValue + speedUnit }}
                    div {{ currentValue | currency | current }}
        v-divider.light
        v-card-actions(class="pa-3")
            v-spacer



</template>

<script>
    export default {
        name: 'motorCard',
        props: {
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

    @media only screen and (max-width: 600px)
        .motor-display
            font-size 24px
    @media only screen and (min-width: 786px)
        .motor-display
            font-size 32px
    @media only screen and (min-width: 992px)
        .motor-display
            font-size 42px

</style>