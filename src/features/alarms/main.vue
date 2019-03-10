<template lang="pug">
    v-layout
        v-data-table.elevation-1(class="alarm-table" :headers="headers" :items="activeAlarms" item-key="TimeStamp" select-all="")
            template(slot="items" slot-scope="props" v-if="props.item.TimeStamp != null")
                td.title(class="alarm-row") {{ props.item.AlarmName }}
                td.title(class="alarm-row") {{ props.item.AlarmNumber  }}
                td.title(class="alarm-row") {{ props.item.TimeStamp | moment(" MM/DD, h:mm a") }}
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
                styleObject:{
                   backgroundColor: 'red',
                   fontSize: '38px'
                },
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
                e.preventDefault();
                this.$socket.emit("CLEAR_ALARMS")
            }
        }
    }

</script>

<style scoped lang="stylus">
    $keyframe-name = pulse


    @-webkit-keyframes alarm-row {
        from { background-color: inherit; }
        to { background-color: #D50000; color: white}
    }
    @-moz-keyframes alarm-row {
        from { background-color: inherit;}
        to { background-color: #D50000; color: white}
    }
    @-o-keyframes alarm-row {
        from { background-color: inherit; }
        to { background-color: #D50000;color: white }
    }
    @keyframes alarm-row {
        from { background-color: #E57373; }
        to { background-color: #D50000; color: white}
    }

    .alarm-table
        width 100%
        height 100%
        padding-bottom 30rem

    .alarm-row
        color white
        backgroundColor #FFCDD2
        fontSize: 28px
        -webkit-animation alarm-row 1.5s infinite; /* Safari 4+ */
        -moz-animation    alarm-row 1.5s infinite; /* Fx 5+ */
        -o-animation      alarm-row 1.5s infinite; /* Opera 12+ */
        animation         alarm-row 1.5s infinite; /* IE 10+ */

</style>