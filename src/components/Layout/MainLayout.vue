<template lang="pug">
    v-app
        div(style="position: relative;")
            app-system-bar
            app-toolbar(:scrollTarget="scrollingZone")
        div.scroll-y(id="scrolling-zone")
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
        scrollingZone: "scrolling-zone",
    })
}

</script>

<style lang="stylus" scoped>
    #scrolling-zone
        padding auto
    .styled-alarm
        max-height 20px
        text-align center
        padding 0
        margin 0

    @media(max-height: 610px)
        #scrolling-zone
            max-height 522px
    @media(max-height: 812px)
        #scrolling-zone
            max-height 732px
    @media(max-height: 969px)
        #scrolling-zone
            max-height 889px

</style>
