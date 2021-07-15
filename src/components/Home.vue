<template>
  <el-container class="home">
    <el-header>
      <div style="margin-left: 10%;">
        <el-menu
          :default-active="$router.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <span style="font-family: Microsoft JhengHei">分級表</span>
            </template>
            <el-menu-item index="/LaborGrading">
              <span style="font-family: fantasy">2021 </span>
              <span style="font-family: Microsoft JhengHei"
                >勞工保險投保薪資分級表</span
              >
            </el-menu-item>
            <el-menu-item index="/HealthGrading">
              <span style="font-family: fantasy">2021 </span>
              <span style="font-family: Microsoft JhengHei"
                >全民健康保險投保金額分級表</span
              >
            </el-menu-item>
          </el-submenu>
          <!-- <el-menu-item index="2">处理中心</el-menu-item>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"
          ><a href="https://www.ele.me" target="_blank"
            >订单管理</a
          ></el-menu-item
        > -->
        </el-menu>
      </div>
    </el-header>
    <el-main
      ><!--路由佔位符-->
      <router-view></router-view
    ></el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
  /* line-height: 60px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
