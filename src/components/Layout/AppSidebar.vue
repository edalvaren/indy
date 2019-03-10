<template lang="pug">
    v-navigation-drawer(v-bind:value="drawer" :mini-variant="mini" absolute="" dark="" temporary="")
        v-list.pa-1
            v-list-tile(v-if="mini" @click.stop="mini = !mini")
                v-list-tile-action
                    v-icon chevron_right
            v-list-tile(avatar="" tag="div")
                v-list-tile-avatar
                    img(v-bind:src="this.iloxLogo")
                v-list-tile-content
                    v-list-tile-title MENU
                v-list-tile-action
                    v-btn(icon="" @click.stop="mini = !mini")
                        v-icon chevron_left
        v-list.pt-0(dense="")
            v-divider(light="")
            v-list-tile(v-for="item in items" :key="item.title")
                v-list-tile-action
                    router-link(:to="item.path")
                        v-icon {{ item.icon }}
                v-list-tile-content
                    v-list-tile-title {{ item.title }}
</template>

<script>
    import { mapState } from 'vuex'
    const ilox = require('@/assets/ilox.png');
    export default {
        computed: mapState({
           drawer: state => state.effectStore.drawer,
            }),
        data () {
            return {
                iloxLogo: ilox,
                items: [
                    { title: 'Dashboard', icon: 'dashboard', path: '/'},
                    { title: 'Alarms', icon: 'notification_important', path: '/alarms'},
                    { title: 'Trends', icon: 'trending_up', path: '/trends'},
                    { title: 'Tools', icon: 'build', path: '/settings'},
                ],
                mini: false,

                right: null,

            }
        }
    }
</script>