<template lang="pug">
    div
        v-system-bar(dark="")
            span {{isConnected ? 'Connected' : 'Disconnected'}}
            v-spacer
            span  {{now | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}
        AlarmBanner(:AlarmValue="systemFaulted" v-if="systemFaulted")
            span(class="alarm-banner-text") {{unclearedAlarm.AlarmName}}
</template>

<script>
    import store from '@/store'; // eslint-disable-line no-unused-vars
    import {mapState, mapGetters} from 'vuex'
    import AlarmBanner from '@/components/Alarms/AlarmBanner.vue'
    export default {
        name: 'AppSystemBar',
        components: {
            AlarmBanner
        },
        mounted(){

        },
        computed: {
            ...mapState({
                isConnected: state=> state.socketStore.isConnected,
                alarms: state => state.socketStore.alarms,
                now: state => state.timeStore.now,
        }),
            ...mapGetters({
               systemFaulted: 'SystemFaulted',
                unclearedAlarm: 'UnclearedAlarm'
            })
        },
        created() {
            setInterval(() => this.$store.state.timeStore.now = new Date, 1000 * 60)
        }
    }

</script>

<style scoped lang="stylus">
    .alarm-banner-text
        font-size 32px
        font-weight bold
        justify-content space-evenly
        align-content center
</style>