<template>
    <el-container class="home-bar">
        <el-header style="height: 80px">
            <div>
                <img src="../assets/logo.png" alt="BUAA" />
                <span>毕设仿真展示平台</span>
            </div>
            <el-button type="info" @click="logout"> 退出 </el-button>
        </el-header>
        <el-container class="aside-bar">
            <el-aside :width="isCollapse ? '65px ' : '200px'">
                <!-- 侧边栏菜单区域 -->
                <el-menu
                    background-color="rgb(0, 97, 172)"
                    text-color="#FFF"
                    active-text-color="red"
                    unique-opened
                    :collapse="isCollapse"
                    :collapse-transition="false"
                    router
                    :default-active="activePath"
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
                            :index="'/' + subItem.path"
                            v-for="subItem in item.children"
                            :key="subItem.id"
                            @click="saveNavState('/' + subItem.path)"
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
                <!-- 折叠区 -->
                <div
                    class="toggle-button"
                    @click="toggleCollapse"
                    :class="
                        isCollapse
                            ? 'el-icon-d-arrow-right'
                            : 'el-icon-d-arrow-left'
                    "
                ></div>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer style="height: 60px">
                    <dl>《基于CSI微小特征的无源目标检测方法研究》</dl>
                    <dt>---ZY1902315郭宇</dt>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            // 是否折叠
            isCollapse: false,
            // 左侧菜单数据
            menulist: [],
            iconsObj: {
                125: 'el-icon-s-management',
                103: 'el-icon-s-release',
                101: 'el-icon-video-camera-solid',
                102: 'el-icon-s-opportunity',
                145: 'el-icon-s-data',
            },
            // 被激活的链接
            activePath: '',
        }
    },

    // 利用生命周期函数 控制赋值的时间
    created() {
        this.getMenulist()
        this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
        // 点击按钮，切换菜单的折叠与展开
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        },
        // 退出登录设置
        logout() {
            window.sessionStorage.clear()
            this.$router.push('login')
        },
        // 获取所有菜单
        async getMenulist() {
            const { data: res } = await this.$http.get('menus')
            if (res.meta.status !== 200) {
                return this.$message.error(res.meta.msg)
            }
            this.menulist = res.data
        },
        // 保存链接的激活状态
        saveNavState(activePath) {
            window.sessionStorage.setItem('activePath', activePath)
        },
    },
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
                width: 10%;
            }
            > span {
                padding-left: 30px;
                font: bold 28px '微软雅黑';
                color: #fff;
            }
        }
    }
    .aside-bar {
        display: flex;
        .el-aside {
            background-color: rgb(0, 97, 172);
            .el-menu {
                border-right: 0px;
            }
        }
    }
}
.toggle-button {
    position: absolute;
    background-color: rgb(240, 255, 255);
    font-size: 15px;
    align-items: center;
    color: black;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
    padding-top: 9.6%;
}

.show-bar {
    .el-main {
        background-color: azure;
        padding-left: 5%;
    }
    .el-footer {
        background-color: rgb(10, 45, 103);
        font: bold 25px '宋体';
        color: #fff;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        > dl {
            margin: 0px;
        }
        > dt {
            font: bold 20px '宋体';
            margin-left: -100px;
        }
    }
}
</style>
