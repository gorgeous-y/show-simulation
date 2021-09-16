<template>
  <div>
    <div id="cimg" style="width:1000px; height: 600px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  mounted() {
    setTimeout(() => {
      this.setChart()
    }, 1000)
  },
  methods: {
    setChart() {
      let cimg = document.getElementById('cimg')
      console.log(cimg)
      let myChart = echarts.init(cimg)
      var option = {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['model', '均方差误差', '均方根误差', '和方差误差', '均值误差'],
            ['FSPL', 46.78496034, 6.839953241, 19135.04878, 0.244077858],
            ['2Ray', 36.5355456, 6.044464046, 14943.03815, 3.585266921],
            ['3Ray', 202.344934, 14.22479996, 82759.07802, 6.196579278],
            ['E3M', 36.04202499, 6.003501061, 14741.18822, 2.189815825],
            ['2Ray-E3M', 30.04118101, 5.480983581, 12286.84303, 2.240548367]
          ]
        },
        xAxis: [
          { type: 'category', gridIndex: 0 },
          { type: 'category', gridIndex: 1 }
        ],
        yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
        grid: [{ bottom: '55%' }, { top: '55%' }],
        series: [
          // These series are in the first grid.
          { type: 'bar', seriesLayoutBy: 'row' },
          { type: 'bar', seriesLayoutBy: 'row' },
          { type: 'bar', seriesLayoutBy: 'row' },
          // These series are in the second grid.
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
          { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
        ]
      }
      option && myChart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped></style>
