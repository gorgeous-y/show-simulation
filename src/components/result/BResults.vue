<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>大尺度结果分析</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片区域 -->
    <el-card>
      <!-- 2 准备图表容器Dom -->
      <E3MData></E3MData>
    </el-card>
  </div>
</template>

<script>
// 1 引入图表
import E3MData from './E3MData.vue'
export default {
  components: {
    E3MData
  }
}
</script>

<style lang="less" scoped>
.el-card{
  margin-top: 40px;
  overflow: auto;
}
</style>
