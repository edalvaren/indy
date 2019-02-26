<template lang="pug">
    button(class="StopButton" @click="onClick")
        slot Stop
</template>

<script>
    export default {
        name: 'mpb-stop',
        props: {
            onClick: {
                type: Function,
                required: true,
            }
        },
        data: () => ({
            StopTag: '',
        })
    }
</script>

<style scoped>


</style>