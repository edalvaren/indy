<template lang="pug">
    v-snackbar(v-model="snackbar" top timeout="timeout" color="error")
</template>
<script>
export default {
    props: {
        timeout
    },
    data(){
        return {
            snackbar: true
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>
