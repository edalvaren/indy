<template lang="pug">
    button(class="StartButton" :style="buttonStyle" @click="onClick")
        slot Start
</template>

<script>
    export default  {
        name: 'mpb-start',
        props: {
           buttonStyle: {
               type: Object,
               required: false
           },
           onClick: {
               type: Function,
               required: true,
           }
        },
        data: () => ({
            startTag: '',
        })
    }

</script>

<style scoped lang="stylus">


</style>