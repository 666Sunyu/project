<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="formfacility" class="demo-form-inline">
          <el-form-item label="管理编号:">
            <el-input v-model="formfacility.a" placeholder></el-input>
          </el-form-item>
          <el-form-item label="设备名称:">
            <el-select v-model="formfacility.a" placeholder>
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备类型:">
            <el-select v-model="formfacility.a" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源:">
            <el-select v-model="formfacility.a" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态:">
            <el-select v-model="formfacility.a" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">&nbsp;&nbsp;+&nbsp;&nbsp;新增</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="address" label="名称"></el-table-column>
        <el-table-column prop="address" label="管理编号"></el-table-column>
        <el-table-column prop="address" label="规格型号"></el-table-column>
        <el-table-column prop="address" label="生产厂家"></el-table-column>
        <el-table-column prop="address" label="购买时间"></el-table-column>
        <el-table-column prop="address" label="机修负责人"></el-table-column>
        <el-table-column prop="address" label="设备类型"></el-table-column>
        <el-table-column prop="address" label="电气负责人"></el-table-column>
        <el-table-column prop="address" label="状态"></el-table-column>
        <el-table-column prop="address" label="技术状况"></el-table-column>
        <el-table-column prop="address" label="来源"></el-table-column>
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
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total,  prev, pager, next,sizes"
        :total="400"
      ></el-pagination>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'FROCK',
  data () {
    return {
      formfacility: {
        a: ''
      },
      //   下面表格数据
      tableData: [{ address: 1 }]
    }
  }
}
</script>
<style lang="less" scoped>
.el-form {
  height: 40px;
}
</style>
