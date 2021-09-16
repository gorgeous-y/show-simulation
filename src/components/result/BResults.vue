<template>
  <div class="BResults">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>大尺度结果分析</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片区域 -->
    <el-carousel indicator-position="outside" :autoplay="false" height="660px">
      <el-carousel-item v-for="item in 4" :key="item">
        <E3MData v-if="item == 1"></E3MData>
        <Cimg v-if="item == 2"></Cimg>
        <!-- <Cimg></Cimg> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// 1 引入图表
import E3MData from './E3MData.vue'
import Cimg from './Cimg.vue'
export default {
  components: {
    E3MData,
    Cimg
  }
}
</script>

<style lang="less" scoped>
.el-carousel {
  margin: 3% auto;
}
.el-carousel__item:nth-child(2n) {
  background-color: white;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
}
</style>
