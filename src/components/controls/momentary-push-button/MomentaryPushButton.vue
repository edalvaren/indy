<template lang="pug">
    button(class="Button" @click="onClick")
        slot Button

</template>

<script>
    export default {
        name: 'MomentaryPushButton',
        props: {
            onClick: {
                type: Function,
                required: true,
            }
        }
        // TODO: Add component prop
    }
</script>

<style lang="stylus" scoped>
    $color = #388E3C;
    $accentColor = #1B5E20;
    .Button {
        background: $color;
        border: 2px solid $accentColor ;
        color: #FFFFFF;
        border-radius: 20% solid $accentColor;
        cursor: pointer;
        font-size: 3.75rem;
        padding: 10px 25px;
        text-transform: uppercase;
        transition: background .2s ease-in-out;
        &:hover {
            background: darken($color, 20);
        }
        &:disabled {
            opacity: 0.5;
        }
    }
</style>