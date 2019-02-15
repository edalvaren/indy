<template>
    <v-layout row>
        <v-flex xs12>
            <v-card>
                <v-list two-line subheader>

                    <v-list-tile
                            v-for="item in items"
                            :key="item.title"
                            avatar
                    >
                        <v-list-tile-avatar>
                            <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{now}}</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-btn icon ripple>
                                <v-icon color="grey lighten-1">info</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>

                    <v-divider inset></v-divider>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        data () {
            return {
                items: [
                    { icon: 'alarm', iconClass: 'grey lighten-1 white--text', title: 'Drum VFD Fault', subtitle: 'Jan 9, 2014' },
                    { icon: 'alarm', iconClass: 'grey lighten-1 white--text', title: 'ESTOP', subtitle: 'Jan 17, 2014' },
                    { icon: 'alarm', iconClass: 'grey lighten-1 white--text', title: 'Pull Cord', subtitle: 'Jan 28, 2014' }
                ],
                items2: [
                    { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
                    { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
                ]
            }
        },
        computed: mapState({
            now: state => state.b.now
        })
    }
</script>