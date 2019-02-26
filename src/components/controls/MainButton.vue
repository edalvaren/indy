<template lang="pug">
    v-item-group
        v-container(grid-list-xl xs12 md3)
            v-layout(xs4)
                v-flex(v-for="item in HMIButtons" :key="item.index" xs12 md43)
                    v-item
                        v-card.d-flex.align-center(slot-scope="{ active, toggle }" :color="active ? item.Energized : item.OFF" minHeight="200px" tile="" dark="" @click="toggle")
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