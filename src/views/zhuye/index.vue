<template>
  <div class="container">
    <el-row style=" height: 130px;">
      <el-col @click.native="add()" :span="3">
        <i class="el-icon-folder-add smart-index-menu" style="color: rgb(255, 118, 118);" />
        <a href="javascript:;">新建计划</a>
      </el-col>
      <el-col :span="3">
        <i class="el-icon-notebook-2 smart-index-menu" style="color: rgb(30, 144, 255);" />
        <a href="javascript:;">计划排产</a>
      </el-col>
      <el-col :span="3">
        <i class="el-icon-view smart-index-menu" style="color: orange;" />
        <a href="javascript:;">任务详情</a>
      </el-col>
      <el-col :span="3">
        <i class="el-icon-edit-outline smart-index-menu" style="color: rgb(255, 118, 118);" />
        <a href="javascript:;">待办任务</a>
      </el-col>
      <el-col :span="3">
        <i class="el-icon-paperclip smart-index-menu" style="color: orange;" />
        <a href="javascript:;">钢筋加工</a>
      </el-col>
      <el-col :span="3">
        <i class="iconfont icon-empire smart-index-menu" style="color: rgb(30, 144, 255);" />
        <a href="javascript:;">喷洒降尘设备</a>
      </el-col>
      <el-col :span="3">
        <i class="el-icon-files smart-index-menu" style="color: rgb(255, 118, 118);" />
        <a href="javascript:;">智慧模板</a>
      </el-col>
      <el-col :span="3">
        <i class="el-icon-pie-chart smart-index-menu" style="color: orange;" />
        <a href="javascript:;">制梁台账</a>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="padding-top: 10px; padding-bottom: 10px;">
      <el-col :span="12">
        <div class="el-row-topleft">
          <div class="header">
            <span>工序对比</span>
          </div>
          <div class="foot">
            <div id="topleftfoot" style="width:100%;height:80%"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="el-row-topright">
          <div class="header">
            <span>影响因素</span>
          </div>
          <div class="foot">
            <div id="toprightfoot" style="width:100%;height:80%"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="padding-top: 10px; padding-bottom: 10px;">
      <el-col :span="12">
        <div class="el-row-topleft">
          <div class="header">
            <span>工序对比</span>
          </div>
          <div class="foot"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="el-row-topright">
          <div class="header">
            <span>工序对比</span>
          </div>
          <div class="foot"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { comparison } from '@/api/echarts'
import echarts from 'echarts'
export default {
  mounted () {
    this.topLeftFoot()
    this.topRightFoot()
  },
  created () {
    // this.getTopLeftFoot()
  },
  methods: {
    add () {},
    async getTopLeftFoot () {
      const result = await comparison()
      console.log(result)
    },
    // 左侧图标
    topLeftFoot () {
      const myChart = echarts.init(document.getElementById('topleftfoot'))
      const option = {
        title: {},
        tooltip: {
          // trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            // saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value',
          splitLine: { show: false },
          axisLine: {
            // y轴
            show: false
          }
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }

      myChart.setOption(option)
      // 自适应
      setTimeout(() => {
        window.onresize = () => {
          myChart.resize()
        }
      }, 200)
    },
    // 右侧图标
    topRightFoot () {
      const myChart1 = echarts.init(document.getElementById('toprightfoot'))
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          splitLine: { show: false },
          axisLine: {
            // y轴
            show: false
          }
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            }
          }
        ]
      }

      myChart1.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  .el-row:nth-of-type(1) {
    border: 1px solid #ebeef5;
    box-sizing: border-box;
    box-shadow: 0px 0px 8px 0px rgba(232, 237, 250, 0.6),
      0px 2px 4px 0px rgba(232, 237, 250, 0.5);
    .el-col {
      height: 100%;
      text-align: center;
    }
  }
  .el-row:nth-of-type(2),
  .el-row:nth-of-type(3) {
    flex: 1;
    .el-col {
      height: 100%;
    }
  }
}
.el-row:nth-of-type(1) {
  .el-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      margin-bottom: 20px;
    }
    /deep/ a:hover {
      color: #3399ff;
    }
  }
}
.el-row-topleft,
.el-row-topright {
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px 0px rgba(232, 237, 250, 0.6),
    0px 2px 4px 0px rgba(232, 237, 250, 0.5);
  height: 100%;
  width: 100%;

  .header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
  }
  .foot {
    position: relative;
    margin-top: -60px;
    height: 100%;
    // flex:1;
  }
  #topleftfoot,
  #toprightfoot {
    position: absolute;
    bottom: 0;


  }
}

.smart-index-menu {
  font-size: 38px;
}
</style>
