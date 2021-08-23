<template>
  <el-container class="home-bar">
    <el-header>
      <div>
        <img src="../assets/logo.png" alt="BUAA" />
        <span>毕设仿真展示平台</span>
      </div>
      <el-button type="info" @click="logout"> 退出 </el-button>
    </el-header>
    <el-container class="aside-bar">
      <el-aside :width="isCollapse ? '65px ' : '200px'">
        <!-- 折叠区 -->
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="rgb(0, 97, 172)"
          text-color="#FFF"
          active-text-color="red"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menulist"
            :key="item.id"
          >
            <!-- 一级菜单模板区 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="icons" :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{ item.authName }}</span>
            </template>

            <!-- 二级菜单 -->
            <el-menu-item
              :index="subItem.id + ''"
              v-for="subItem in item.children"
              :key="subItem.id"
            >
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-document-checked"></i>
                <!-- 文本 -->
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="show-bar">
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      isshow: 0,
      menulist: [],
      iconsObj: {
        125: 'el-icon-s-management',
        103: 'el-icon-s-release',
        101: 'el-icon-video-camera-solid',
        102: 'el-icon-s-opportunity',
        145: 'el-icon-s-data'
      }
    }
  },
  created() {
    this.getMenulist()
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    logout() {
      window.sessionStorage.clear()
      this.$router.push('login')
    },
    async getMenulist() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) {
        return this.$message.error(res.meta.msg)
      }
      this.menulist = res.data
      console.log(res)
    },
    enter() {
      this.isshow = 1
    }
  }
}
</script>

<style lang="less" scoped>
.icons {
  color: #fff;
  margin-right: 15px;
}
.el-icon-document-checked {
  color: #fff;
}
.home-bar {
  height: 100%;
  .el-header {
    background-color: rgb(10, 45, 103);
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
      img {
        width: 8%;
        height: 8%;
      }
      > span {
        padding-left: 10px;
        font: bold 25px '微软雅黑';
        color: #fff;
      }
    }
  }
  .aside-bar {
    .el-aside {
      background-color: rgb(0, 97, 172);
      .toggle-button {
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
      }
      .el-menu {
        border-right: 0px;
      }
    }
    .show-bar {
      .el-main {
        background-color: azure;
      }
      .el-footer {
        background-color: blueviolet;
      }
    }
  }
}
</style>
