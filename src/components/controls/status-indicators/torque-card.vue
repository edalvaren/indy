<template lang="pug">
    v-card(color='#006064' ripple="" dark hover="")
        v-layout
            v-flex(xs5)
                v-img( :src="CardImage" height="175px" contain)
            v-flex(xs7)
                v-card-title(primary-title="") {{CardTitle }}
                v-card-text( class="headline font-weight-bold")
                    div {{LoadCellValue + " % " }}
                    div {{ TorqueValue + "  %" }}
        v-divider.light
        v-card-actions(class="pa-3")  Status
            v-spacer
            v-icon settings
            v-divider.light(vertical)
            v-icon pan_tool
            v-divider.light(vertical)
            v-icon done

</template>

<script>
    export default {
        name: 'torqueCard',
        props: {
            CardTitle: {
                type: String
            },
            LoadCellValue: {
                type: String,
                required: false
            },
            TorqueValue: {
                type: String
            },
            CardImage: {
                type: String,
                required: false
            },

        },
        data: () => ({

        })
    }

</script>

<style lang="stylus" scoped>

</style>