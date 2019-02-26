<template lang="pug">
    button(class="ResetButton" @click="onClick")
        slot Reset
</template>

<script>
    export default {
        name: 'mpb-reset',
        props: {
            onClick: {
                type: Function,
                required: true,
            }
        },
        data: () => ({
            resetTag: '',
        })
    }

</script>