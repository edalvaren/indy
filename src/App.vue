<template lang="pug">
    #app
        main-layout
</template>

<script>

import MainLayout from './components/Layout/MainLayout';

export default {
  components: {
      MainLayout
     },
    data: () => ({
        TagValue: '',
        //TODO Add the Socket prop to the store so that I can have a connected/disconnected state
    }),
    created() {

    },
    methods: {

    }
}
</script>
<style lang="stylus">
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

    body {
        background-color: #EEEEEE;
        font-family: 'Montserrat', sans-serif;
        display: grid;
        grid-template-rows: auto;
        /*align-items: left;*/
    }
    body, html {
        margin: 0;
        height: 100%;
    }

    #app {
        width: 100%;
    }
</style>