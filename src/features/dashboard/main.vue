<template lang="pug">
    v-container
        v-layout
            v-flex
                v-form
                    v-text-field(v-bind:value="SpiralName" type="input" outline label="SpiralName")
                    v-btn(@click.prevent="updateSpiralName" type="submit") Submit
</template>

<script>
import store from './store'


    export default {
    name: 'Dashboard',

    data(){
        return {
        SpiralName: this.$store.state.dashboard.SpiralName
        }
    },

    methods: {
        updateSpiralName () {
            this.$store.dispatch('dashboard/updateSpiralName', this.SpiralName)
        }
    }

    }


</script>