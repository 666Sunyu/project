<template>
  <div class="container">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#333333"
          text-color="#fff"
          router
        >
          <el-menu-item index="/home">
            <i class="iconfont icon-shouye"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-tool-cabinet_icon"></i>
              <span>资源管理</span>
            </template>
            <el-menu-item index="/explorer/frock">
              <i class="iconfont icon-zuoyouduiqi"></i> 工装管理
            </el-menu-item>
            <el-menu-item index="/explorer/facility">
              <i class="iconfont icon-zuoyouduiqi"></i> 设备管理
            </el-menu-item>
            <el-menu-item index="2-3">
              <i class="iconfont icon-zuoyouduiqi"></i> 设计图纸
            </el-menu-item>
            <el-menu-item index="2-4">
              <i class="iconfont icon-zuoyouduiqi"></i> 物资管理
            </el-menu-item>
            <el-menu-item index="2-5">
              <i class="iconfont icon-zuoyouduiqi"></i> 班组管理
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              &nbsp;
              <i class="iconfont icon-box"></i>
              <span>预制梁管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="iconfont icon-zuoyouduiqi"></i>预制梁清单
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="iconfont icon-zuoyouduiqi"></i>物资匹配规则
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="iconfont icon-shengchangongxuchaxun"></i>
              <span>工序管理</span>
            </template>
            <el-menu-item index="4-1">
              <i class="iconfont icon-zuoyouduiqi"></i>工序字典
            </el-menu-item>
            <el-menu-item index="4-2">
              <i class="iconfont icon-zuoyouduiqi"></i>工序模板
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="iconfont icon-jihua"></i>
              <span>计划管理</span>
            </template>
            <el-menu-item index="5-1">
              <i class="iconfont icon-zuoyouduiqi"></i>生产计划
            </el-menu-item>
            <el-menu-item index="5-2">
              <i class="iconfont icon-zuoyouduiqi"></i>计划排产
            </el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="iconfont icon-shengchanxiaohao"></i>
              <span>生产管理</span>
            </template>
            <el-menu-item index="6-1">
              <i class="iconfont icon-zuoyouduiqi"></i>生产任务
            </el-menu-item>
            <el-menu-item index="6-2">
              <i class="iconfont icon-zuoyouduiqi"></i>待办任务
            </el-menu-item>
            <el-menu-item index="6-3">
              <i class="iconfont icon-zuoyouduiqi"></i>预制梁出库
            </el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="iconfont icon-chaxuntongji"></i>
              <span>查询统计</span>
            </template>
            <el-menu-item index="7-1">
              <i class="iconfont icon-zuoyouduiqi"></i>工序对比
            </el-menu-item>
            <el-menu-item index="7-2">
              <i class="iconfont icon-zuoyouduiqi"></i>制梁进度差异分析
            </el-menu-item>
            <el-menu-item index="7-3">
              <i class="iconfont icon-zuoyouduiqi"></i>生产循迹查询
            </el-menu-item>
            <el-menu-item index="7-4">
              <i class="iconfont icon-zuoyouduiqi"></i>单榀梁对比分析
            </el-menu-item>
            <el-menu-item index="7-5">
              <i class="iconfont icon-zuoyouduiqi"></i>制梁进度查询
            </el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <i class="iconfont icon-cheliangzhongduanxinxiguanli"></i>
              <span>信息管理</span>
            </template>
            <el-menu-item index="8-1">
              <i class="iconfont icon-zuoyouduiqi"></i>通知公告
            </el-menu-item>
            <el-menu-item index="8-1">
              <i class="iconfont icon-zuoyouduiqi"></i>栏目管理
            </el-menu-item>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">
              <i class="iconfont icon-banshou"></i>
              <span>设备控制</span>
            </template>
            <el-menu-item index="9-1">
              <i class="iconfont icon-zuoyouduiqi"></i>钢筋加工设备
            </el-menu-item>
            <el-menu-item index="9-2">
              <i class="iconfont icon-zuoyouduiqi"></i>喷洒降尘设备
            </el-menu-item>
            <el-menu-item index="9-3">
              <i class="iconfont icon-zuoyouduiqi"></i>智慧模板
            </el-menu-item>
            <el-menu-item index="9-4">
              <i class="iconfont icon-zuoyouduiqi"></i>混凝土测温
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.container {
  height: 100%;
}
.el-container {
  height: 100%;
  .el-aside {
    background-color: #333333;

    // .el-menu-item:hover {
    //   outline: 0 !important;
    //   color: #3399ff !important;
    // }

    // .el-submenu:hover {
    //   outline: 0 !important;
    //   color: #3399ff !important;
    // }

    // .el-menu-item.is-active {
    //   background-color: #3399ff !important;
    // }
  }
  .el-main {
  }
}
</style>
