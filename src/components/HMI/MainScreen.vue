<template lang="pug">
    v-container
        v-layout
            v-flex

</template>
<script>
    import { mapActions, mapGetters} from 'vuex'
    import StatusIndicator from '../controls/status-indicators/StatusIndicator'


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
            StatusIndicator
        },
        methods: {
            ...mapActions({
              sayHello: 'socketStore/sayHello'
            })
        }
    }
</script>