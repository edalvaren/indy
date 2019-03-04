<template>
  <v-container>
    <v-layout
            text-xs-center
            wrap
    >
      <v-flex xs12>
        <v-img
                :src="require('../assets/logo_transparent.png')"
                class="my-3"
                contain
                height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>

      </v-flex>

      <v-flex
              xs12
              mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-layout justify-center>
          <a
                  v-for="(eco, i) in ecosystem"
                  :key="i"
                  :href="eco.href"
                  class="subheading mx-3"
                  target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader'
        }
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com'
        },
      ],
    })
  }
</script>

<style>

</style>


/**
v-container(grid-list-md="")
v-layout.wrap
v-flex(xs6 sm5 md4 )
v-card
v-card-title {{ tags }}
**/