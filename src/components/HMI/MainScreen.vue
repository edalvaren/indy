<template lang="pug">
    v-container
        v-layout
            v-flex
                v-form
                    v-text-field(v-bind:value="testValue" type="input" outline label="test value")
                    v-btn(@click.prevent="sendTestValue" type="submit") Submit
            v-flex
                main-button
                v-divider
        v-layout
            v-flex
                home-speed-dial
</template>
<script>
    import {mapState, mapActions, mapGetters} from 'vuex'
    import MainButton from './controls/MainButton'
    import StatusIndicator from './controls/StatusIndicator'
    import HomeSpeedDial from './HomeSpeedDial'
    import store from '../../store'


    export default {
        name: "MainScreen",

        data: () => ({
            testValue: '',
            cards: [
                {title: 'Drum Speed', flex: 2},
                {title: 'Take-up Speed', flex: 2},
            ],
            column2: [
                {title: 'Drum Current',flex: 2},
                {title: 'Take-up Current', flex: 2},
            ]
        }),
        computed: {
            // ...mapState({
            //     testValue: state => state.testStore.testValue,
            // }),
            ...mapGetters({
                testValue: 'testValue'
            }),
        },
        components: {
            MainButton, StatusIndicator, HomeSpeedDial
        },
        methods: {
            sendTestValue(e){
                e.preventDefault();
            },

        }
    }
</script>