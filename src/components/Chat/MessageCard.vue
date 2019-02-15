<template>
    <v-flex xs12>
        <v-card>
            <v-card-title>
                <h3 class="display-2 font-weight-medium"> Messenger </h3>
            </v-card-title>
            <v-card-text>
                <v-text-field
                        v-bind:value="message"
                        label="Solo"
                        solo
                        readonly
                ></v-text-field>
                <form>
                    <v-text-field
                            v-model="message"
                            outline
                            clearable
                            label="Message"
                            type="text"
                    ></v-text-field>
                </form>
            </v-card-text>
            <v-card-actions>
                <v-btn @click.prevent="sendMessage" flat dark color="primary">Send Message</v-btn>
            </v-card-actions>
        </v-card>
        <v-divider inset></v-divider>
        <v-subheader v-model="titoDice"> Hello </v-subheader>
        <v-card
                class="mx-auto"
                color="#26c6da"
                dark
                max-width="400"
        >
            <v-card-title>
                <v-icon
                        large
                        left
                >
                    mdi-twitter
                </v-icon>
                <span class="title font-weight-light">CraftMark Bakery</span>
            </v-card-title>

            <v-card-text class="headline font-weight-bold">
                {{titoDice}}
            </v-card-text>

            <v-card-actions>
                <v-list-tile class="grow">
                    <v-list-tile-avatar color="grey darken-3">
                        <v-img
                                class="elevation-6"
                                v-bind:src="Tego">

                        </v-img>
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>Tego Calderon</v-list-tile-title>
                    </v-list-tile-content>

                    <v-layout
                            align-center
                            justify-end
                    >
                        <v-icon class="mr-1">mdi-heart</v-icon>
                        <span class="subheading mr-2">256</span>
                        <span class="mr-1">·</span>
                        <v-icon class="mr-1">mdi-share-variant</v-icon>
                        <span class="subheading">45</span>
                    </v-layout>
                </v-list-tile>
            </v-card-actions>
        </v-card>


    </v-flex>
</template>

<script>
    import Tego from '../../assets/tego.jpg';
    import io from 'socket.io-client';
    let socket = io('localhost:5000');
    socket.on('stream', function(data){
        this.message = data.message;
    });



    export default {
        name: "MessageCard",
        data: () => ({
            message: 'Metele Sazón, bateria y reggeatón.. que lo demas lo pone Calderón   ',
            titoDice: 'Felinaa... ',
            user: '',
            messages: [],
            Tego: Tego,
            socket: io('localhost:5000')

            // socket: io('localhost:5000')
        }),
        methods: {
            sendMessage(e) {
                e.preventDefault();
                this.socket.emit('SEND_MESSAGE', {
                    user: this.user,
                    message: this.message
                });
            },
        },
        mounted() {
            this.socket.on('MESSAGE', (data) => {
                this.messages = [...this.messages, data];
                // you can also do this.messages.push(data)
            });
            this.socket.on('TAG', (data) => {
                this.titoDice = data;
            })
        }
    }
</script>

<style scoped>

</style>