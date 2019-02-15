<template>
    <alarm-list> </alarm-list>
</template>

<script>
    import {mapState} from 'vuex'
    import AlarmList from './AlarmList'
    export default {
        name: 'AlarmWrapper',
        components: {
          AlarmList
        },
        data: () => ({
            alarms: [],

        }),
        computed: mapState({
            alarms: state => state.alarmStore.alarms
        })
    }
</script>