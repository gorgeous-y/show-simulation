<template>
  <div id="main" style="width: 600px; height: 400px"></div>
</template>

<script>
import * as echarts from 'echarts'
import Edata from '../../assets/resultdata/Edata.json'
console.log(Edata)
export default {
  setup() {},
  mounted() {
    // 3 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'))
    run(Edata)

    function run(_rawData) {
      var models = ['Raw', 'FSPL', '2Ray', '3Ray', 'E3M']
      var datasetWithFilters = []
      var seriesList = []
      echarts.util.each(models, function(model) {
        var datasetId = 'dataset_' + model
        //在series 中合并数据
        datasetWithFilters.push({
          //组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件
          id: datasetId,
          // 指定 dataset.transform 以哪个 dataset 作为输入，指定了一个index为dataset_raw的dataset。
          fromDatasetId: 'dataset_model',
          transform: {
            type: 'filter',
            config: {
              and: [
                { dimension: 'Distance', gte: 3838.020235 },
                { dimension: 'Model', '=': model }
              ]
            }
          }
        })
        // series
        seriesList.push({
          type: 'line',
          datasetId: datasetId,
          // showSymbol 是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示。
          showSymbol: false,
          // name 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
          name: model,
          //endLabel 折线末端的标签。
          endLabel: {
            // 是否显示标签。
            show: true,
            //标签内容格式器，
            formatter: function(params) {
              return params.value[0] + ': ' + params.value[1]
            }
          },

          labelLayout: {
            // moveOverlap 在标签重叠的时候是否挪动标签位置以防止重叠。
            // 目前支持配置为：
            // 'shiftX' 水平方向依次位移，在水平方向对齐时使用
            // 'shiftY' 垂直方向依次位移，在垂直方向对齐时使用
            moveOverlap: 'shiftY'
          },
          //emphasis 在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果
          //  --'none' 不淡出其它图形，默认使用该配置。
          // --'self' 只聚焦（不淡出）当前高亮的数据的图形。
          // --'series' 聚焦当前高亮的数据所在的系列的所有图形。
          emphasis: {
            focus: 'series'
          },
          //encode 声明的基本结构如下，其中冒号左边是坐标系、标签等特定名称
          encode: {
            //把 “名为 Distance 的维度” 映射到 X 轴/Y轴
            x: 'Distance',
            y: 'RxPower',
            //将维度名为model和RxPower显示在标签中
            label: ['Model', 'RxPower'],
            // 指定数据项的名称使用***维度在饼图等图表中有用，可以使这个名字显示在图例（legend）中。
            itemName: 'Distance',
            // 使用 “名为 RxPower 的维度” 的值在 tooltip 中显示
            tooltip: ['RxPower']
          }
        })
      })

      // 4 准备数据配置项
      var option = {
        animationDuration: 10000,
        dataset: [
          {
            //   组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。
            // 这个 series 引用 index 为 `dataset_model` 的 dataset 。
            id: 'dataset_moel',
            // 原始数据。一般来说，原始数据表达的是二维表。可以用如下这些格式表达二维表：二维数组，其中第一行/列可以给出 维度名，也可以不给出，直接就是数据：
            source: _rawData
          }
        ].concat(datasetWithFilters),
        title: {
          text: 'RxPower of models in distance between 3km and 16km'
        },
        // 提示框
        tooltip: {
          order: 'valueDesc',
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          nameLocation: 'middle'
        },
        yAxis: {
          name: 'RxPower'
        },
        // 坐标的绝对定位位置
        grid: {
          right: 140
        },
        series: seriesList
      }
      // 5 展示数据
      myChart.setOption(option)
    }
    option && myChart.setOption(option)
  }
}
</script>
