    <template>
            <v-toolbar class="primary styled-toolbar" dark scroll-off-screen :scroll-target="scrollTarget">
                <v-menu :nudge-width="100">
                        <v-toolbar-title slot="activator" class="headline text-uppercase">
                            <v-icon @click.stop="drawerChanged" dark>menu</v-icon>
                        </v-toolbar-title>
                </v-menu>
                <v-toolbar-title>
                    <span class="full-text"> CONDITIONING CONTROL CENTER  </span>
                    <span class="short-text"> CCC  </span>
                </v-toolbar-title>

                <v-btn icon>
                    <v-icon color="danger" @click="reloadPage">refresh</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-toolbar-side-icon> <v-img class="toolbar-logo" v-bind:src="this.iloxLogo" min-height="50px" min-width="150">  </v-img></v-toolbar-side-icon>


            </v-toolbar>

    </template>

<script>
    import Ilox from "../../assets/ilox.png"
    export default {
        name: "AppToolbar",
        props: {
          scrollTarget: {
              required: false
          }
        },
        data: () => ({
            iloxLogo: Ilox,
            menuItems: [
                'Home', 'Connection', 'About',
            ]
        }),
        methods: {
            drawerChanged: function() {
                this.$store.commit('change', this.$store.state)
            },
            reloadPage: function () {
                window.location.reload()
            }
        }
    }
</script>


<style scoped lang="stylus">
    .styled-toolbar
        font-family Roboto, sans-serif
        color $toolbar-color
        backgroundColor $toolbar-color
    .toolbar-logo {
        width: 100%;
        color: 'secondary';
        justify-self: center;
        margin-right: 100px;
    }
    .short-text { display: none; }

    @media (max-width: 750px) {
        .short-text {
            display: inline-block;
        }

        .full-text {
            display: none;
        }
    }
</style>