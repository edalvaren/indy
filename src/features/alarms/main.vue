<template lang="pug">
    v-data-table.elevation-1( :headers="headers" :items="activeAlarms" item-key="TimeStamp" select-all="")
        template(slot="items" slot-scope="props" v-if="props.item.TimeStamp != null")
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
        sockets: {
            connect: function () {
                console.log(`socket connected...with socket ID ${this.$socket.id}`)
            },
        },
        mounted(){
            // this.$socket.emit('READ_ALARMS');
            // this.Socket.on('ALARM', (data) => {
            //     this.$store.dispatch('socketStore/updateAlarms', data);
            // });
        },
        computed: {
            ...mapState({
                // Socket: state => state.socketStore.Socket,
                activeAlarms: state => state.socketStore.alarms
            }),
            // ...mapGetters({
            //
            // })
        },
        data: () => ({
                selected: [],
                headers: [
                    {
                        text: 'Alarm Number',
                        align: 'left',
                        sortable: true,
                        value: 'AlarmNumber'
                    },
                    { text: 'TimeStamp', value: 'TimeStamp' },

                ],
            }),
        methods: {
            clearAlarms(e){
                this.$socket.emit("CLEAR_ALARMS");
            }
        }
        }

</script>

<style scoped lang="stylus">


</style>