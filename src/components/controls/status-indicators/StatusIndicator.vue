<template lang="pug">
        v-container(fluid grid-list-md="")
            <!--v-layout(row wrap="")-->
                        <!--v-card.mx-auto.status-indicator(color="#006064" dark="" max-width="500")-->
                            <!--v-card-title.display-1.align-center.justify-center {{'socketStore/DrumSpeed' | currency }}-->
                            <!--v-card-actions-->
                                <!--v-list-tile.grow-->
                                    <!--v-list-tile-content-->
                                        <!--v-list-tile-title.text-xs-left() {{'socketStore/DrumSpeed.name'}}-->
                                    <!--v-layout(align-center="" justify-end="")-->
                                        <!--v-icon.mr-1-->


</template>

<script>

    // const TagsToRender = ['Spiral_Drum.VFD_Feedback_Frequency', 'Spiral_Takeup.VFD_Feedback_Frequency'];
import {mapGetters} from 'vuex';


    export default {
        props: {
            Drum: Object,
            Tags: Array,
        },
        computed: {
            ...mapGetters([
            ])
        },
        data: () => ({

        }),
        methods: {
            pressButton (e) {
                e.preventDefault();
            }
        },
        /* filters to add units at the end of the displayed value*/
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
    $status-indicator-color = #01579B

    #valueIndicator
        color: $status-indicator-color

</style>
