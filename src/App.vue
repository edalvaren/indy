<template lang="pug">
    #app
        main-layout
</template>

<script>

import MainLayout from './components/Layout/MainLayout';
import io from 'socket.io-client';

export default {
  components: {
      MainLayout
  },
    data: () => ({
        TagValue: '',
        message: '',
        messages: [],
        testValues: [],
        //TODO Add the Socket prop to the store so that I can have a connected/disconnected state
        socket: io('localhost:5000')
    }),
}
</script>
