<template lang="pug">
    v-card(class="motor-display" color="#37474f"  ripple="" dark hover="" flat="" tile="")
        v-layout
            v-flex(xs5)
                v-img( :src="CardImage" height="175px" contain)
            v-flex(xs7)
                v-card-title(primary-title="") {{CardTitle }}
                v-card-text(class="motor-display")
                    div {{SpeedValue + Unit }}
                    div {{ CurrentValue | currency | current }}
        v-divider.light
        v-card-actions(class="pa-3")  Status
            v-spacer
            v-icon settings
            v-divider.light(vertical)
            v-icon pan_tool
            v-divider.light(vertical)
            v-icon done


</template>

<script>
    export default {
        name: 'motorCard',
        props: {
            PLCTag: {
                type: Object,
                required: false
            },
            CardTitle: {
                type: String,
                required: false
            },
            Unit: {
                type: String,
                required: false
            },
            SpeedValue: {
                type: String,
                required: false
            },
            CurrentValue: {
                required: false
            },
            CardImage: {
              type: String,
              required: false
            },

        },
        data: () => ({

        }),
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
            font-size 14px
    @media only screen and (min-width: 600px)
        .motor-display
            font-size 16px
    @media only screen and (min-width: 600px)
        .motor-display
            font-size 28px

</style>