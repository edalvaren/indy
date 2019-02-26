<template lang="pug">
    v-container(fluid="")
        v-switch(v-model="motor" label="Drum" value="Drum")
        v-switch(v-model="motor" label="Takeup" value="Take-up")

</template>

<script>
    import Vue from 'vue'
    import VeeValidate from 'vee-validate'
    import {mapState} from 'vuex';

    Vue.use(VeeValidate);

    export default {
        name: "SpiralSettings",
        $_veeValidate : {
            validator: 'new'
        },
        data: () => ({
            name: '',
            BoolVal: {
              tagName: "Alarm_Disable"
            },
            dictionary: {
                attributes: {
                    email: 'E-mail Address'
                    // custom attributes
                },
                custom: {
                    name: {
                        required: () => 'Name can not be empty',
                        max: 'The name field may not be greater than 10 characters'
                        // custom messages
                    },
                    select: {
                        required: 'Select field is required'
                    }
                }
            }
        }),
        mounted () {
            this.$validator.localize('en', this.dictionary)
        },
        methods: {
            appendIconCallback () {},
            prependIconCallback () {},
            submit() {
                this.$validator.validateAll();
            },
            clear() {
                this.name = '';
                this.email = '';
                this.select = null;
                this.checkbox = null;
                this.$validator.reset()
            }
        }
    }

</script>


<style scoped>
    #input-usage .v-input__prepend-outer,
    #input-usage .v-input__append-outer,
    #input-usage .v-input__slot,
    #input-usage .v-messages {
        border: 1px dashed rgba(0,0,0, .4);
    }
</style>