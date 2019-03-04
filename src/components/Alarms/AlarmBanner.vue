<template lang="pug">
    div
        v-alert(v-model="AlarmValue" dismissible type="error" icon="warning")
</template>
<script>
export default {
    name: 'AlarmBanner',
    props: {
        AlarmValue: {
            type: Boolean
        },
        AlarmText: {
            type: String
        }
    },
    data: () => ({
        alert: true
    })
}
</script>
