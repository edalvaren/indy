<template lang="pug">
    v-data-table.elevation-1(v-model=selected :headers="headers" :items="ActiveAlarms" item-key="AlarmName" select-all="")
        template(slot="items" slot-scope="props")
            td {{ props.item.AlarmName }}
            td.text-xs-left {{ props.item.AlarmNumber  }}
            td.text-xs-left {{ props.item.timestamp }}


</template>


<script>

    import store from '@/store'; // eslint-disable-line no-unused-vars
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: 'alarmMain',
        mounted(){
            this.Socket.emit('READ_ALARMS');
            this.Socket.on('ALARM', (data) => {
                this.$store.dispatch('socketStore/updateAlarms', data);
            });
        },
        computed: {
            ...mapState({
                Socket: state => state.socketStore.Socket,
                ActiveAlarms: state => state.socketStore.ActiveAlarms
            }),
            ...mapGetters({

            })
        },
        data: () => ({
                selected: [],
                Alarm: this.ActiveAlarms[2],
                headers: [
                    {
                        text: 'Alarm Name',
                        align: 'left',
                        sortable: true,
                        value: 'name'
                    },
                    { text: 'Alarm Number', value: 'calories' },
                    { text: 'Time Stamp', value: 'fat' },
                ],
                testData: [
                    {
                        name: 'Take-up Fault',
                        number: "702",
                        timestamp:"03/01/19 13:05:41",
                    },
                    {
                        name: 'Drum VFD Fault',
                        number: 237,
                        timestamp: "02/27/19 09:55:13",
                     },
                ]
            })
        }

</script>

<style scoped lang="stylus">


</style>