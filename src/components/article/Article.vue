<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>项目介绍</el-breadcrumb-item>
      <el-breadcrumb-item>项目详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 文本区域 -->
    <dl>
      
    </dl>

    <!-- 分页区域 -->
    <!-- <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
        >
        </el-pagination> -->
  </div>
</template>

<script>
export default {
  setup() {},
  methods: {
    // 监听 pagesize 改变的事件
    // handleSizeChange(newSize){
    //     console.log(newSize)
    // },
    // // 监听页码值改变
    // handleCurrentChange(newPage){
    //     console.log(newSize)
    // }
  }
}
</script>

<style lang="less" scoped></style>
