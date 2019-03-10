<template lang="pug">
    div(class="blink_me")
        v-alert.text-md-center(v-model="AlarmValue" dismissible type="error" icon="warning" transition="expand-transition")
            slot
</template>
<script>
export default {
    name: 'AlarmBanner',
    props: {
        AlarmValue: {
            type: Boolean
        },
        styleClass: {
            type: String
        }
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
    .blink_me {
        animation: blinker 1.5s linear infinite;
    }

    @keyframes blinker {
        50% {
            opacity: 0.5;
        }
    }
</style>
