<template lang="pug">
    div
        v-alert(v-model="AlarmValue" dismissible type="error" icon="warning")
            slot
</template>
<script>
export default {
    name: 'AlarmBanner',
    props: {
        AlarmValue: {
            type: Boolean
        },
    },
    data: function(){
        return {
        styleObject: {
            fontSize: '30px',
        }
        }
    }
}

</script>

<style scoped lang="stylus">


</style>
