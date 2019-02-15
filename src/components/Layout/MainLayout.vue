<template lang="pug">
    v-app
        app-system-bar
        app-toolbar
        v-content
            v-container.fluid
                router-view
        app-side-bar
        app-footer
</template>

<script>
import AppSystemBar from './AppSystemBar';
import AppToolbar from './AppToolbar';
import AppSideBar from './AppSidebar';
import AppFooter from './AppFooter';

export default {
    name: 'MainLayout',
    components: {
        AppFooter, AppSideBar, AppToolbar,
        AppSystemBar
    },
    methods: {

    }
}

</script>