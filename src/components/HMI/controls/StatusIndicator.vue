<template lang="pug">
        v-container(grid-list-md="")
            v-layout()
                v-flex(v-for="item in MainIndicators" :key="item" xs12="" md4="")
                    v-item
                        v-card.d-flex.align-center(slot-scope="{ active, toggle }" :color="active ? item.Connected : item.OFF" tile="" dark="" height="200" @click="toggle")
                            v-scroll-y-transition
                                .display-3.text-xs-center(v-if="active")
                                    | {{item.TextOn}}
                                .display-3.text-xs-center(v-else)
                                    | {{item.Title}}

</template>

<script>

    export default {
        data: () => ({
            MainIndicators:
                [
                {Title: "Drum Speed (Hz)",
                    TextOn: "Stopped",
                    OFF: "btn-blugray",
                    Connected: '#607D8B'},
                {Title: "Take-up Speed (RPM)",
                    TextOn: "Running",
                    ErrorText: "Connection Error",
                    OFF: "statusIndicatorOn",
                    Connected: "btn-blugray"},
                {Title: "Load Cell (%)",
                    TextOn: "Reset",
                    ErrorText: "Connection Error",
                    OFF: "statusIndicatorOn",
                    Connected: 'primary'},
                {Title: "Spiral Speed (Hz)",
                    TextOn: "Reset",
                    OFF: "statusIndicatorOn",
                    Connected: '#607D8B'}
            ]
        }),
        components: () => {

        }
    }

</script>

<style lang="stylus">
    $statusIndicatorOFF = #424242,
    $btn-blugray = #607D8B,

</style>
