<template>

    <!--<v-container>-->
        <!--<v-layout justify-center>-->
            <!--<v-btn-->
                    <!--color="pink"-->
                    <!--dark-->
                    <!--@click.stop="drawer = !drawer"-->
            <!--&gt;-->
                <!--Toggle-->
            <!--</v-btn>-->
        <!--</v-layout>-->
    <!--</v-container>-->

    <v-navigation-drawer
            v-bind:value="drawer"
            :mini-variant="mini"
            absolute
            dark
            temporary
    >
        <v-list class="pa-1">
            <v-list-tile v-if="mini" @click.stop="mini = !mini">
                <v-list-tile-action>
                    <v-icon>chevron_right</v-icon>
                </v-list-tile-action>
            </v-list-tile>

            <v-list-tile avatar tag="div">
                <v-list-tile-avatar>
                    <img src="../../assets/twitter_profile_image.png">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>Machine Menu</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                    <v-btn icon @click.stop="mini = !mini">
                        <v-icon>chevron_left</v-icon>
                    </v-btn>
                </v-list-tile-action>
            </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
            <v-divider light></v-divider>

            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
            >
                <v-list-tile-action>
                    <router-link :to="item.path"><v-icon>{{ item.icon }}</v-icon></router-link>
                </v-list-tile-action>

                <v-list-tile-content>
                   <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: mapState({
           drawer: state => state.a.drawer
        }),
        data () {
            return {
                items: [
                    { title: 'Dashboard', icon: 'dashboard', path: '/'},
                    { title: 'Alarms', icon: 'notification_important', path: '/alarms'},
                    { title: 'Trends', icon: 'trending_up', path: '/trends'},
                    { title: 'Tools', icon: 'build', path: '/about'},
                ],
                mini: false,
                right: null
            }
        }
    }
</script>