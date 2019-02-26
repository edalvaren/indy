<template lang="pug">
    button(class="StartButton" @click="onClick")
        slot Start
</template>

<script>
    export default  {
        name: 'mpb-start',
        props: {
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