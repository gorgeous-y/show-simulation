<template>
  <div id="main" style="width:1000px; height: 600px"></div>
</template>

<script>
import * as echarts from 'echarts'
import Rawdata from '../../assets/resultdata/Raw.json'
import FSPLdata from '../../assets/resultdata/FSPL.json'
import TwoRaydata from '../../assets/resultdata/2Ray.json'
import ThreeRaydata from '../../assets/resultdata/3Ray.json'
import E3Mdata from '../../assets/resultdata/E3M.json'
export default {
  mounted() {
    var myChart = echarts.init(document.getElementById('main'))
    var option = {
      title: {
        text: '折线图' // 标题
      },
      tooltip: {
        trigger: 'axis' // 鼠标提示框
      },
      color: ['black', 'rgb(145,204,117)', 'blue', 'rgb(191,90,255)', 'red'],
      legend: {
        // 图例
        orient: 'horizontal',
        icon: 'rect',
        itemWidth: 33,
        itemHeight: 10,
        borderWidth: 2,
        itemGap: 40,
        textStyle: {
          color: 'black',
          fontSize: 16,
          fontWeight: 'bolder',
          fontFamily: '微软雅黑'
        },
        right: '6%',
        top: '5%',
        data: [
          { name: 'Raw', icon: 'circle' },
          { name: 'FSPL' },
          { name: '2Ray' },
          { name: '3Ray' },
          { name: 'E3M' }
        ],
        lineStyle: {
          type: 'solid'
        }
      },
      title: {
        text: 'E3M模型与其他三种模型拟合对比图',
        left: 'center',
        bottom: '0%',
        textStyle: {
          fontSize: '24px'
        }
      },
      grid: {
        // 图表相对位置
        top: '9%',
        left: '6%',
        right: '6%',
        bottom: '15%',
        containLabel: true
      },
      xAxis: {
        // x轴
        name: '距离/m',
        nameLocation: 'center',
        nameTextStyle: {
          fontWeight: 'bolder',
          fontSize: '16px',
          fontFamily: 'Microsoft YaHei',
          color: 'black',
          verticalAlign: 'center'
        },
        boundaryGap: true,
        min: 3000,
        max: 16500,
        nameGap: '50',
        maxInterval: 1500
      },
      yAxis: {
        // y轴
        min: -120,
        max: -20,
        nameLocation: 'center',
        name: '接收功率/dBm',
        nameTextStyle: {
          fontWeight: 'bolder',
          fontSize: '16px',
          fontFamily: 'Microsoft YaHei',
          color: 'black',
          verticalAlign: 'center'
        },
        nameGap: '50'
      },

      series: [
        // 每个轴的数据
        // Raw
        {
          seriesLayoutBy: 'row',
          showSymbol: false,
          symbolSize: 5,
          name: 'Raw',
          type: 'scatter',
          data: Rawdata,
          endLabel: {
            show: true,
            formatter: function(params) {
              return params.seriesName
            }
          }
        },
        // FSPL
        {
          showSymbol: false,
          smooth: true,
          lineStyle: {
            width: '3'
          },
          endLabel: {
            show: true,
            formatter: function(params) {
              return params.seriesName
            },
            fontWeight: 'bolder',
            fontSize: '14'
          },
          name: 'FSPL',
          type: 'line',
          data: FSPLdata
        },
        // 2Ray
        {
          showSymbol: false,
          smooth: true,
          endLabel: {
            show: true,
            formatter: function(params) {
              return params.seriesName
            },
            fontWeight: 'bolder',
            fontSize: '14'
          },
          lineStyle: {
            width: '3'
          },
          name: '2Ray',
          type: 'line',
          data: TwoRaydata
        },
        // 3Ray
        {
          showSymbol: false,
          smooth: true,
          endLabel: {
            show: true,
            formatter: function(params) {
              return params.seriesName
            },
            fontWeight: 'bolder',
            fontSize: '14'
          },
          lineStyle: {
            width: '3'
          },
          name: '3Ray',
          type: 'line',
          data: ThreeRaydata
        },
        // E3M
        {
          showSymbol: false,
          smooth: true,
          endLabel: {
            show: true,
            formatter: function(params) {
              return params.seriesName
            },
            fontWeight: 'bolder',
            fontSize: '14'
          },
          lineStyle: {
            width: '4'
          },
          name: 'E3M',
          type: 'line',
          data: E3Mdata
        }
      ],
      labelLayout: {
        moveOverlap: 'shiftY'
      }
    }
    option && myChart.setOption(option)
  }
}
</script>

<style lang="less" scoped>
#main {
  margin: 2% auto;
}
</style>
