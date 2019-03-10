<template lang="pug">
    v-container(fluid)
        v-layout.row.wrap
            v-flex.d-flex(xs4)
                div(class="input")
                    label Amount:
                    NumericInput(placeholder="touch to input" v-model="amount")

</template>

<script>
import {NumericInput} from 'numeric-keyboard';

    export default {
        name: 'spiral-settings',
        components: {
            NumericInput
        },
        data() {
            return {
                amount: null
            }
        }
    }

</script>

<style scoped lang="stylus">

</style>