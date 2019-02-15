<template lang="pug">
    v-item-group
        v-container(grid-list-xl="")
            v-layout(xs4)
                v-flex(v-for="item in HMIButtons" :key="item" xs12="4" md4="")
                    v-item
                        v-card.d-flex.align-center(slot-scope="{ active, toggle }" :color="active ? item.Energized : item.OFF" tile="" dark="" minWidth="200" minHeight="150" @click="toggle")
                            v-scroll-y-transition
                                .display-3.text-xs-center(v-if="active")
                                    | {{item.TextOn}}
                                .display-3.text-xs-center(v-else)
                                    | {{item.Title}}

</template>

<script>

export default {
    data: () => ({
        HMIButtons: [
            {Title: "Start", TextOn: "Running", Energized: "#00C853", OFF: "#2E7D32"},
            {Title: "Stop", TextOn: "Stopped", Energized: "#B71C1C", OFF: '#E53935'},
            {Title: "Reset", TextOn: "Reset", Energized: "#3D5AFE", OFF: '#3949AB'}
        ]
    })
}

</script>


<style lang="stylus">
</style>