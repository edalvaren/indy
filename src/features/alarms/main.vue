<template lang="pug">
    v-data-table.elevation-1( :headers="headers" :items="ActiveAlarms" item-key="TimeStamp" select-all="")
        template(slot="items" slot-scope="props")
            td.text-xs-left {{ props.item.AlarmName }}
            td.text-xs-left {{ props.item.AlarmNumber  }}
            td.text-xs-left {{ props.item.TimeStamp | moment(" MM DD YY, h:mm:ss a") }}
        template(slot="no-data")
            v-alert(:value="true" color="success" icon="warning") No Active alarms
        template(slot="footer")
            td(:colspan="headers.length")
                v-btn(block color="#283593" dark @click="clearAlarms")  Clear Alarms

</template>


<script>

    import store from '@/store'; // eslint-disable-line no-unused-vars
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: 'alarmMain',
        mounted(){
            // this.Socket.emit('READ_ALARMS');
            // this.Socket.on('ALARM', (data) => {
            //     this.$store.dispatch('socketStore/updateAlarms', data);
            // });
        },
        computed: {
            ...mapState({
                // Socket: state => state.socketStore.Socket,
                ActiveAlarms: state => state.socketStore.ActiveAlarms
            }),
            ...mapGetters({

            })
        },
        data: () => ({
                selected: [],
                headers: [
                    {
                        text: 'Alarm Number',
                        align: 'left',
                        sortable: true,
                        value: 'AlarmName'
                    },
                    { text: 'Time Stamp', value: 'calories' },
                ],
            }),
        methods: {
            clearAlarms(e){
                this.$store.dispatch('socketStore/clearAlarms');
                // this.Socket.emit('CLEAR_ALARMS');
            }
        }
        }

</script>

<style scoped lang="stylus">


</style>