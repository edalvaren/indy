<template lang="pug">
    v-app
        app-system-bar
        app-toolbar
        v-content
            v-container(xs12 md12)
                router-view
        app-side-bar
        app-footer
</template>

<script>
import AppSystemBar from './AppSystemBar';
import AppToolbar from './AppToolbar';
import AppSideBar from './AppSidebar';
import AppFooter from './AppFooter';
// Needed for the store to work
import {mapState, mapGetters} from 'vuex';
export default {
    name: 'MainLayout',
    components: {
        AppFooter,
        AppSideBar,
        AppToolbar,
        AppSystemBar,
    },
    methods: {

    },
    data: () => ({
        faultText: "Hello"
    })
}

</script>

<style lang="stylus" scoped>
    .styled-alarm
        max-height 20px
        text-align center
        padding 0
        margin 0
</style>
