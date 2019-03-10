<template lang="pug">
    div(class="alarm-banner-wrapper")
        v-system-bar(status color="primary" lights-out dark)
            span {{isConnected ? 'Connected' : 'Disconnected'}}
            v-spacer
            span  {{now | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}
        AlarmBanner( :AlarmValue="systemFaulted" v-if="systemFaulted")
            span(class="alarm-row") {{unclearedAlarm.AlarmName}}
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

    .alarm-banner-wrapper
        padding 0px
        margin 0px

    .alarm-row

        margin 0px
        font-size 22px
        font-weight bold
        -webkit-animation alarm-row 1s infinite; /* Safari 4+ */
        -moz-animation    alarm-row 1s infinite; /* Fx 5+ */
        -o-animation      alarm-row 1s infinite; /* Opera 12+ */
        animation         alarm-row 1s infinite; /* IE 10+ */

</style>