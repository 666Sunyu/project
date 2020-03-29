<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="formFrock" class="demo-form-inline">
          <el-form-item label="台座名称:">
            <el-input v-model="formFrock.taizuo" placeholder></el-input>
          </el-form-item>
          <el-form-item label="工装类型:">
            <el-select v-model="formFrock.type" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="线路类型:">
            <el-select v-model="formFrock.circuit" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态:">
            <el-select v-model="formFrock.status" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="newadd()">&nbsp;&nbsp;+&nbsp;&nbsp;新增</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="address" label="名称"></el-table-column>
        <el-table-column prop="address" label="跨度"></el-table-column>
        <el-table-column prop="address" label="线路类型"></el-table-column>
        <el-table-column prop="address" label="使用场地"></el-table-column>
        <el-table-column prop="address" label="生产日期"></el-table-column>
        <el-table-column prop="address" label="购买日期"></el-table-column>
        <el-table-column prop="address" label="使用状态"></el-table-column>
        <el-table-column prop="address" label="BIM构件"></el-table-column>
        <el-table-column prop="address" label="行号"></el-table-column>
        <el-table-column prop="address" label="列号"></el-table-column>
        <el-table-column prop="address" label="生产厂家"></el-table-column>
        <el-table-column prop="address" label="检修周期"></el-table-column>
        <el-table-column align="center" prop="address" label="操作" width="180px">
          <el-button-group>
            <el-button size="mini" type="primary">二维码</el-button>
            <el-button size="mini" type="primary">
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button size="mini" type="danger">
              <i class="el-icon-delete"></i>
            </el-button>
          </el-button-group>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="5"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total,  prev, pager, next,sizes"
        :total="400"
      ></el-pagination>
    </el-card>
    <!-- 点击新增弹出框 -->
<new-frock   :dialog='dialogFormVisible' @newFrock='newDialog'/>
  </div>
</template>
<script>
import NewFrock from '@/views/explorer/frock/components/newfrock.vue'
export default {
  name: 'FROCK',
  data () {
    return {
      // 新增弹出框
      dialogFormVisible: false,
      formFrock: {
        taizuo: '',
        // 工装类型
        type: '',
        // 线路类型
        circuit: '',
        // 状态
        status: ''
      },
      //   下面表格数据
      tableData: [{ address: 1 }]
    }
  },
  components: {
    NewFrock
  },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {},
    newadd () {
      this.dialogFormVisible = true
    },
    // 弹出框取消
    newDialog (par) {
      this.dialogFormVisible = par
    }
  }
}
</script>
<style lang="less" scoped>
.el-form {
  height: 40px;
}
</style>
