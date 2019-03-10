<template lang="pug">
    v-footer(height="auto")
        v-card(class="flex app-footer" dark tile)
            v-card-actions(class="gray-darken-3 justify-center")
                    strong &copy 2018 Intralox LLC

</template>
<script>
    export default {
        data: () => ({

        })
    }
</script>

<style lang="stylus">
    .app-footer
        align-contents justify-center
        background-color #212121
        color #212121
</style>