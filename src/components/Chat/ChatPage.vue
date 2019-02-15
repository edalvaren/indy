<template>
    <v-container>
        <v-layout
                text-xs-center
                wrap>
            <v-flex xs12>
                <h1 class="display-3 font-weight-bold mb-3">
                    Chat Hub
                </h1>
                <p class="subheading font-weight-regular">
                    A test using  <code> Socket.IO </code>
                </p>            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex mb-4>
        <!--<message-card/>-->
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    // import MessageCard from './MessageCard';

    export default {
        name: "ChatPage",
        components: {
            // MessageCard
        }
    }
</script>

<style scoped>

</style>