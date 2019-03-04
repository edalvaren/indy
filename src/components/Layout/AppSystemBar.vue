<template>
    <div>
    <v-system-bar dark>
    <v-spacer></v-spacer>
    <span> {{now | moment("dddd, MMMM Do YYYY, h:mm:ss a")}} </span>
    </v-system-bar>
    </div>
</template>

<script>
    import {mapState} from 'vuex'


    export default {
        name: 'AppSystemBar',
        computed: mapState({
           now: state => state.timeStore.now
        }),
        created() {
            setInterval(() => this.$store.state.timeStore.now = new Date, 1000 * 60)
        }
    }

</script>