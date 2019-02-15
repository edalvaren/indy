    <template>
            <v-toolbar color="primary" dark>
                <v-menu :nudge-width="100">
                        <v-toolbar-title slot="activator" class="headline text-uppercase">
                            <v-icon @click.stop="drawerChanged" dark>menu</v-icon>
                        </v-toolbar-title>

                    <v-list>
                        <v-list-tile
                                v-for="item in menuItems"
                                :key="item"
                        >
                            <v-list-tile-title v-text="item"></v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                <v-toolbar-title> CONDITIONING CONTROL CENTER </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>refresh</v-icon>
                </v-btn>
            </v-toolbar>
    </template>

<script>
    export default {
        name: "AppToolbar",
        data: () => ({
            menuItems: [
                'Home', 'Connection', 'About',
            ]
        }),
        methods: {
            drawerChanged: function() {
                this.$store.commit('change', this.$store.state)
            }
        }
    }
</script>

<style scoped>

</style>