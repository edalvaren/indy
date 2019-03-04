<template lang="pug">
        v-layout(fluid="" grid-list-md="")
            v-speed-dial(v-model="fab" :top="top" :bottom="bottom" :right="right" :left="left" :direction="direction" :open-on-hover="hover" :transition="transition")
                v-btn(slot="activator" v-model="fab" color="#B71C1C" dark="" fab="")
                    v-icon build
                    v-icon close
                v-btn(fab="" dark="" large="" color="green")
                    v-icon dialpad
                v-btn(fab="" dark="" large="" color="indigo")
                    v-icon pan_tool
                v-btn(fab="" dark="" large="" color="red")
                    v-icon notification_important


</template>

<script>
    export default {
        computed: {
            activeFab() {
                switch (this.tabs) {
                    case 'one':
                        return {'class': 'purple', icon: 'pan_tool'}
                    case 'two':
                        return {'class': 'red', icon: 'notification_important'}
                    case 'three':
                        return {'class': 'green', icon: 'keyboard_arrow_up'}
                    default:
                        return {}
                }
            }
        },
        name: "HomeSpeedDial",
        data: () => ({
            direction: 'right',
            fab: false,
            fling: false,
            hover: false,
            tabs: null,
            top: false,
            right: true,
            bottom: true,
            left: false,
            transition: 'slide-y-reverse-transition'
        }),
        watch: {
            top(val) {
                this.bottom = !val
            },
            right(val) {
                this.left = !val
            },
            bottom(val) {
                this.top = !val
            },
            left(val) {
                this.right = !val
            }
        }
    }
</script>

<style lang="stylus">

    /* This is for documentation purposes and will not be needed in your application
    <!--#create .v-speed-dial {-->
        <!--position: absolute;-->
        <!--align-content bottom;-->
    <!--}-->

    <!--#create .v-btn&#45;&#45;floating {-->
        <!--position: relative;-->
    <!--}-->
    */
</style>