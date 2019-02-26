<template lang="pug">


</template>


<script>
import {Line, mixins} from 'vue-chartjs'
const {reactiveProp} = mixins
export default Line.extend({ //We are extending the base chart class as mentioned above
    mixins: [reactiveProp],
    data() {
        return {
            options: { //Chart.js options
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        //this.chartData is created in the mixin
        this.renderChart(this.chartData, this.options)
    }
})

</script>

<style lang="stylus" scoped>

</style>