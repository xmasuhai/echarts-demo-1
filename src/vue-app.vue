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
const vueChartOption = options
console.log("vueChartOption: ", vueChartOption)

export default {
  name: 'vue-app',
  components: {
    VueEcharts
  },
  data() {
    return {
      option: {}
    }
  },
  mounted() {
    console.log(this.option)
  },
  methods: {
    loadMore() {
      console.log(this.option)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
