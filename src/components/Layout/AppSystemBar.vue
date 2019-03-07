<template lang="pug">
    div
        v-system-bar(dark="")
            v-spacer
            span  {{now | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}
        slot
</template>

<script>
    import store from '@/store'; // eslint-disable-line no-unused-vars
    import {mapState} from 'vuex'
    export default {
        name: 'AppSystemBar',
        components: {
        },
        mounted(){
        },
        computed: {
             ...mapState({
           now: state => state.timeStore.now,
           alarmActive: state => (state.socketStore.ActiveAlarms.length > 0)
        }),
        },
        created() {
            setInterval(() => this.$store.state.timeStore.now = new Date, 1000 * 60)
        }
    }

</script>