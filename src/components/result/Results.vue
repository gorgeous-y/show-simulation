<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>结果分析</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片区域 -->
    <el-card>
      <!-- 2 准备图表容器Dom -->
      <Edatal></Edatal>
    </el-card>
  </div>
</template>

<script>
// 1 引入图表
import Edatal from './Edatal.vue'
export default {
  components: {
    Edatal,
  }
}
</script>

<style lang="less" scoped></style>
