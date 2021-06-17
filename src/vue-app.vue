<template>
  <div id="vueChartDemo">
    <h2>在 Vue 中使用 echarts</h2>
    <vue-echarts :option="option"></vue-echarts>
    <button @click="loadMore"> load More</button>
  </div>
</template>

<script>
import VueEcharts from './components/vue-echarts.vue'
import {options} from './modules/lineChart.js'

export default {
  name: 'vue-app',
  components: {
    VueEcharts
  },
  data() {
    return {
      option: {
        options
      }
    }
  },
  methods:{
    loadMore() {
      console.log(options)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
